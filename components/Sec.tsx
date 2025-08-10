"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import InfiniteScroll from "./InfiniteScroll"; // update path if needed

const secretariat: string[] = [
  "Secretary General – Sejal",
  "Deputy Secretary General – Vanshika",
  "Director General – Ipshita",
  "Deputy Director General – Daniel",
  "Administrative General – Anvesha",
  "HOD Creative Strategy – Sparsh",
  "HOD Organizing Committee – Mayukh",
  "HOD Cultural Affairs – Nitya",
  "HOD Scribe – Prateesh",
  "HOD Finance – Akshat",
  "HOD Marketing & Media – Shambhavi",
  "HOD Logistics – Shubharun & Ahaana",
  "HOD Delegate Affairs – Shubhroneil",
  "HOD Public Relations – Satparna",
  "HOD Creative Strategy – Arnav Rathi",
];


const Sec: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    updateSize(); // Set on first render
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <motion.section
      id="secretariat"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        padding: "7vh 5vw",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        gap: isMobile ? "2rem" : "5rem",
      }}
    >
      <div style={{ maxWidth: isMobile ? "100%" : "50%", textAlign: isMobile ? "center" : "left" }}>
        <h1 style={{ fontSize: isMobile ? "2rem" : "3.5rem", fontWeight: 700, marginBottom: "60px", color: "black" }}>
          Meet Our Team
        </h1>
        <p style={{ fontSize: isMobile ? ".8rem" : "1.1rem", lineHeight: 1.5, color: "black" }}>
          Our secretariat is composed of dedicated individuals who are committed to ensuring the success of the GIIS Model United Nations conference. Each member brings unique skills and experiences to the table, working tirelessly to
            create an enriching and memorable experience for all participants. From organizing logistics to managing delegate affairs, our team is here to support you every step of the way.
        </p>
      </div>

      <div
        style={{
          width: isMobile ? "90vw" : "660px",
          height: isMobile ? "300px" : "400px",
          overflow: "hidden",
          backgroundColor: "rgba(0,0,0,0.8)",
          borderRadius: "20px",
          padding: isMobile ? "16px" : "32px",
          border: "3px solid #fff",
          fontSize: isMobile ? "0.85rem" : "1.1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 30px 0 rgba(157,77,221,0.15)",
        }}
      >
        <InfiniteScroll
          items={secretariat.map((member) => ({
            content: (
              <div style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>
                {member}
              </div>
            ),
          }))}
          isTilted
          tiltDirection="left"
          autoplay
          autoplaySpeed={0.5}
          autoplayDirection="down"
          pauseOnHover
        />
      </div>
    </motion.section>
  );
};

export default Sec;
