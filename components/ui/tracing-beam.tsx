"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setSvgHeight(ref.current.scrollHeight); // Dynamically calculate the SVG height
    }
  }, [ref]);

  // Animating gradient positions based on scroll progress
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, svgHeight - 200]),
    { stiffness: 500, damping: 90 }
  );

  return (
    <div ref={ref} className={`relative w-full ${className || ""}`}>
      {/* SVG tracing beam */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="absolute h-screen left-0"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            strokeWidth="1"
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
          />
          <defs>
            <linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1.get()} // Animate gradient's start position
              y2={y2.get()} // Animate gradient's end position
            >
              <stop offset="0" stopColor="#18CCFC" stopOpacity="0" />
              <stop offset="0.25" stopColor="#18CCFC" stopOpacity="1" />
              <stop offset="0.5" stopColor="#6344F5" stopOpacity="1" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
};
