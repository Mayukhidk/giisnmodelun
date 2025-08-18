"use client";
import { motion } from "motion/react";
import { WorldMap } from "./world-map";

export function WorldMapDemo() {
  return (
    <div className=" py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          The GSG Network{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
         The GSG schools network spans across the globe, connecting students from diverse backgrounds and cultures. Our mission is to foster global citizenship and understanding through education and collaboration.
        </p>
      </div>
<WorldMap
  dots={[
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 19.076, lng: 72.8777 } },      // India (Mumbai)
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 25.276987, lng: 55.296249 } },  // Dubai
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 24.4539, lng: 54.3773 } },      // Abu Dhabi
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 3.139, lng: 101.6869 } },       // Malaysia
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 13.7563, lng: 100.5018 } },     // Thailand
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 35.6762, lng: 139.6503 } },     // Japan
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 10.8231, lng: 106.6297 } },     // Vietnam
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 24.7136, lng: 46.6753 } },      // Saudi Arabia
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 37.5665, lng: 126.978 } },      // South Korea
    { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 11.5564, lng: 104.9282 } },     // Cambodia
  ]}
/>
    </div>
  );
}
