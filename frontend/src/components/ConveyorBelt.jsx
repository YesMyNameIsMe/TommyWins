import { useEffect, useRef, useState } from "react";

const DEFAULT_IMAGES = Array.from({ length: 6 }, (_, i) => ({
  src: `https://picsum.photos/seed/conveyor${i + 1}/600/450`,
  alt: `Sample image ${i + 1}`,
}));

const TICK = 28; // px between belt ticks

const CSS = `
.cb-root {
  position: relative;
  display: block;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  /* The belt's wide content must never affect the container's own width,
     otherwise flex/grid/shrink-wrapped parents grow with it in a loop. */
  contain: inline-size layout paint;
}
.cb-track {
  display: flex;
  width: max-content;
  animation: cb-scroll var(--cb-duration) linear infinite;
  animation-direction: var(--cb-direction);
  will-change: transform;
}
.cb-root[data-pause="true"]:hover .cb-track,
.cb-root[data-pause="true"]:hover .cb-rail {
  animation-play-state: paused;
}
.cb-group {
  display: flex;
  flex-shrink: 0;
  gap: var(--cb-gap);
  padding-right: var(--cb-gap); /* keeps spacing identical across the loop seam */
}
.cb-item {
  flex: 0 0 auto;
  width: var(--cb-item-width);
  height: var(--cb-item-height);
  margin: 0;
  border-radius: var(--cb-radius);
  overflow: hidden;
  background: #d9d9d9;
}
.cb-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
}
.cb-rail {
  height: 10px;
  margin-top: 12px;
  border-radius: 5px;
  background-color: #2b2b2b;
  background-image: repeating-linear-gradient(
    90deg,
    #4a4a4a 0,
    #4a4a4a 2px,
    transparent 2px,
    transparent ${TICK}px
  );
  animation: cb-rail var(--cb-rail-duration) linear infinite;
  animation-direction: var(--cb-direction);
}
@keyframes cb-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(calc(-1 * var(--cb-shift))); }
}
@keyframes cb-rail {
  from { background-position-x: 0; }
  to   { background-position-x: ${TICK}px; }
}
@media (prefers-reduced-motion: reduce) {
  .cb-track, .cb-rail { animation: none; }
  .cb-root { overflow-x: auto; }
}
`;

/**
 * Continuously scrolling strip of images.
 *
 * Props
 *  images        Array of { src, alt } (or plain URL strings)
 *  speed         Pixels per second (default 80)
 *  direction     "left" | "right" (default "left")
 *  itemWidth     Width of each image in px (default 280)
 *  itemHeight    Height of each image in px (default 210)
 *  gap           Space between images in px (default 24)
 *  radius        Image corner radius in px (default 6)
 *  pauseOnHover  Pause the belt while hovered (default true)
 *  showRail      Draw the moving belt rail underneath (default true)
 */
export default function ConveyorBelt({
  images = DEFAULT_IMAGES,
  speed = 80,
  direction = "left",
  itemWidth = 365,
  itemHeight = 210,
  gap = 24,
  radius = 6,
  pauseOnHover = true,
}) {
  const rootRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setViewportWidth(el.clientWidth));
    };
    setViewportWidth(el.clientWidth);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, []);

  const items = images.map((img) =>
    typeof img === "string" ? { src: img, alt: "" } : img
  );
  if (items.length === 0) return null;

  // Width of one full set of images, including trailing gap.
  const setWidth = items.length * (itemWidth + gap);
  // Enough copies to cover the viewport, plus one spare so the loop never shows a gap.
  const copies = Math.min(
    12,
    Math.max(2, Math.ceil(viewportWidth / setWidth) + 1)
  );

  const duration = setWidth / speed;
  const railDuration = TICK / speed;

  const style = {
    "--cb-shift": `${setWidth}px`,
    "--cb-duration": `${duration}s`,
    "--cb-rail-duration": `${railDuration}s`,
    "--cb-direction": direction === "right" ? "reverse" : "normal",
    "--cb-gap": `${gap}px`,
    "--cb-item-width": `${itemWidth}px`,
    "--cb-item-height": `${itemHeight}px`,
    "--cb-radius": `${radius}px`,
  };

  return (
    <>
      <style>{CSS}</style>
      <div
        ref={rootRef}
        className="cb-root"
        style={style}
        data-pause={pauseOnHover}
        role="region"
        aria-label="Scrolling image gallery"
      >
        <div className="cb-track">
          {Array.from({ length: copies }, (_, copy) => (
            <div className="cb-group" key={copy} aria-hidden={copy > 0}>
              {items.map((img, i) => (
                <figure className="cb-item" key={i}>
                  <img
                    src={img.src}
                    alt={copy === 0 ? img.alt : ""}
                    draggable={false}
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}