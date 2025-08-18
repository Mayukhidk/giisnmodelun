"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface MapProps {
  lineColor?: string;
}

export function WorldMap({ lineColor = "#0ea5e9" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: theme === "dark" ? "black" : "white",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = ((lng + 180) * 800) / 360;
    const y = ((90 - lat) * 400) / 180;
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // GIIS campuses: Singapore HQ → other countries
  const dots = [
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 19.076, lng: 72.8777 } }, // India (Mumbai)
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 25.276987, lng: 55.296249 } }, // Dubai
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 24.4539, lng: 54.3773 } }, // Abu Dhabi
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 3.139, lng: 101.6869 } }, // Malaysia
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 13.7563, lng: 100.5018 } }, // Thailand
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 35.6762, lng: 139.6503 } }, // Japan
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 10.8231, lng: 106.6297 } }, // Vietnam
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 24.7136, lng: 46.6753 } }, // Saudi Arabia
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 37.5665, lng: 126.978 } }, // South Korea
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 11.5564, lng: 104.9282 } }, // Cambodia
  ];

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            {["start", "end"].map((pos) => {
              const point = projectPoint(dot[pos as "start" | "end"].lat, dot[pos as "start" | "end"].lng);
              return (
                <g key={`${pos}-${i}`}>
                  <circle cx={point.x} cy={point.y} r="2" fill={lineColor} />
                  <circle cx={point.x} cy={point.y} r="2" fill={lineColor} opacity="0.5">
                    <animate attributeName="r" from="2" to="8" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                </g>
              );
            })}
          </g>
        ))}
      </svg>
    </div>
  );
}
