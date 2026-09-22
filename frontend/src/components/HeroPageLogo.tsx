import { useMobile } from "@/context/mobileContext";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BASE_W = 525;
const BASE_H = 389;

function HeroPageLogo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setScale(Math.min(1, Math.max(0.75, w / BASE_W))); // clamp 0.5–1
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
  <div
    ref={wrapperRef}
    style={{
      position: "relative",
      width: "100%",
      maxWidth: BASE_W,
      minWidth: 0,
      height: BASE_H * scale,
    }}
  >
    <div
      style={{
        position: "absolute",   // <- takes it out of flow
        top: 0,
        left: 0,
        width: BASE_W,
        height: BASE_H,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
      }}
    >
      
      <img src={'/assets/landingpage/HeroPageMe.svg'}
                  style={{ position: "absolute", left: 76.9}}/>

        {/* Icon 1: the sparkle SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="108"
          height="128"
          viewBox="0 0 108 128"
          fill="none"
          style={{ position: "absolute", top: 153, left:30}} // wherever it sits in your layout
        >
          <motion.path
          className={"pointer-events-none will-change-transform"}
            d="M74.7361 -5.98882e-05L51.734 56.8324L8.2967e-05 51.2284L48.3263 68.76L38.2636 127.66L60.6591 72.2835L107.89 82.0525L64.0668 60.3559L74.7361 -5.98882e-05Z"
            fill="white"
            style={{ transformOrigin: "54px 64px" }}
            initial={{ rotate: -524.055, scaleX: 0, scaleY: 0 }}
            animate={{
              rotate: [-524.055, -164.055, -164.055],
              scaleX: [0, 1, 1, 0, 0],
              scaleY: [0, -1, -1, 0, 0],
            }}
            transition={{
              rotate: { duration: 5, times: [0, 0.5899, 1], ease: ["easeInOut", "linear"], repeat: Infinity },
              scaleX: { duration: 5, times: [0, 0.2732, 0.3167, 0.5899, 1], ease: ["easeOut", "linear", "easeOut", "linear"], repeat: Infinity },
              scaleY: { duration: 5, times: [0, 0.2732, 0.3167, 0.5899, 1], ease: ["easeOut", "linear", "easeOut", "linear"], repeat: Infinity },
            }}
          />
        </svg>

        {/* Text element */}
        <motion.div
          className="bg-darkestBlue flex px-5 py-2"
          style={{borderRadius: "30px", position: "absolute", top: 220, left: 224, rotate: -14.8 }} // its base position in the layout
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            y: { duration: 5, times: [0, 0.5, 1], ease: "easeInOut", repeat: Infinity },
          }}
        >
          <span className="text-white flex w-full bitCount text-2xl" >
              A DESIGN PORTFOLIO!
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroPageLogo;