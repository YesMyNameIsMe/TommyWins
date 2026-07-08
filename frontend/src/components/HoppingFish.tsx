'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useTheme } from '@/context/themeContext';

interface HoppingFishProps {
  containerWidth: number;   // width of the grass field in px
  yMin: number;   // top of the allowed hopping band (px from container top)
  yMax: number;   // bottom of the allowed hopping band
  maxHopDistance?: number;
  minHopDistance?: number;
  fishWidth?: number;
  fishHeight?: number;
  startingX?: number;
}

function HoppingFish({ containerWidth, yMin, yMax, fishWidth = 80, fishHeight = 60, maxHopDistance = 200, minHopDistance = 60, startingX = window.innerWidth/2 }: HoppingFishProps) {
  const [x, setX] = useState(startingX);
  const [facingLeft, setFacingLeft] = useState(false);
  const [arc, setArc] = useState({ from: yMin, peak: yMin - 20, to: yMin });
  const [landed, setLanded] = useState(false); // NEW

  const xRef = useRef(x);       // always mirrors current x
  const arcToRef = useRef(arc.to);
  const timeoutRef = useRef<number | null>(null);

  const containerWidthRef = useRef(containerWidth);
  const yMinRef = useRef(yMin);
  const yMaxRef = useRef(yMax);
  const fishWidthRef = useRef(fishWidth);
  const fishHeightRef = useRef(fishHeight);

  useEffect(() => {
    containerWidthRef.current = containerWidth;
    yMinRef.current = yMin;
    yMaxRef.current = yMax;
    fishWidthRef.current = fishWidth;
    fishHeightRef.current = fishHeight;
  }); // no dep array — runs after every render, always in sync

  const hop = () => {
    const maxX = containerWidthRef.current - fishWidthRef.current;
    const maxY = yMaxRef.current - fishHeightRef.current;
    const currentYMin = yMinRef.current;

    const distance = minHopDistance + Math.random() * (maxHopDistance - minHopDistance);
    const edgeMargin = maxHopDistance;

    let angle = Math.random() * Math.PI * 2;

    // --- horizontal edge bias ---
    const distFromLeft = xRef.current;
    const distFromRight = maxX - xRef.current;
    const leftPressure = Math.max(0, 1 - distFromLeft / edgeMargin);
    const rightPressure = Math.max(0, 1 - distFromRight / edgeMargin);

    // --- vertical edge bias ---
    const distFromTop = arcToRef.current - yMin;
    const distFromBottom = maxY - arcToRef.current;
    const topPressure = Math.max(0, 1 - distFromTop / edgeMargin);
    const bottomPressure = Math.max(0, 1 - distFromBottom / edgeMargin);

    // combine into a single "push away from nearest edge" vector
    const pushX = leftPressure - rightPressure;   // + means push right, - means push left
    const pushY = topPressure - bottomPressure;   // + means push down, - means push up
    const pressure = Math.max(leftPressure, rightPressure, topPressure, bottomPressure);

    if (pressure > 0 && (pushX !== 0 || pushY !== 0) && Math.random() < pressure) {
      const biasAngle = Math.atan2(pushY, pushX);
      const spread = Math.PI / 3;
      angle = biasAngle + (Math.random() - 0.5) * spread * 2;
    }

    let newX = xRef.current + Math.cos(angle) * distance;
    let newY = arcToRef.current + Math.sin(angle) * distance;

    newX = Math.max(0, Math.min(maxX, newX));
    newY = Math.max(yMin, Math.min(maxY, newY));

    setFacingLeft(newX < xRef.current);
    setX(newX);
    xRef.current = newX;

    // scale arc height with actual hop distance so long hops look like real jumps
    const actualDistance = Math.hypot(newX - xRef.current, newY - arcToRef.current);
    const arcHeight = 20 + Math.min(actualDistance, maxHopDistance) * 0.25; // tune multiplier to taste

    const peak = Math.min(arcToRef.current, newY) - arcHeight;
    setArc({ from: arcToRef.current, peak, to: newY });
    arcToRef.current = newY;

    const nextDelay = 1500 + Math.random() * 2500;
    timeoutRef.current = window.setTimeout(hop, nextDelay);
  };

  useEffect(() => {
    const maxX = containerWidth - fishWidth;
    const maxY = yMax - fishHeight;

    const clampedX = Math.min(Math.max(0, xRef.current), Math.max(0, maxX));
    const clampedY = Math.min(Math.max(yMin, arcToRef.current), Math.max(yMin, maxY));

    if (clampedX !== xRef.current) {
      setX(clampedX);
      xRef.current = clampedX;
    }

    if (clampedY !== arcToRef.current) {
      // keep the arc consistent — snap "to" and "from" together so there's no
      // phantom hop animation, just a settle into the new position
      setArc({ from: clampedY, peak: clampedY, to: clampedY });
      arcToRef.current = clampedY;
    }
  }, [containerWidth, yMin, yMax, fishWidth, fishHeight]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {theme} = useTheme()

   return (
    <motion.div
      className="absolute z-10"
      style={{ width: fishWidth, height: fishHeight }}
      initial={{ x: startingX, y: -400, opacity: 0, rotate: -15 }}
      animate={
        landed
          ? {
              x,
              y: [arc.from, arc.peak, arc.to],
              opacity: 1,
              rotate: 0,
              scaleX: facingLeft ? -1 : 1,
            }
          : {
              x: startingX,
              y: arc.to,
              opacity: 1,
              rotate: 0,
              scaleX: 1,
            }
      }
      transition={
        landed
          ? {
              x: { duration: 0.6, ease: 'easeInOut' },
              y: { duration: 0.6, ease: 'easeOut', times: [0, 0.5, 1] },
              scaleX: { duration: 0.2 },
            }
          : {
              y: { type: 'spring', bounce: 0.5, mass: 0.7 },
              opacity: { duration: 0.3 },
              scaleY: {
                duration: 0.45,
                ease: 'easeOut',
              },
            }
      }
      onAnimationComplete={() => {
        if (!landed) {
          setLanded(true);
          timeoutRef.current = window.setTimeout(hop, 0);
        }
      }}
    >
      <img
        src={theme === 'dark' ? '/assets/landingpage/GrassPlainsFish-Dark.png' : '/assets/landingpage/GrassPlainsFish-Light.png'}
        alt="hopping fish"
        className="w-full h-full"
      />
    </motion.div>
  );
}

export default HoppingFish;