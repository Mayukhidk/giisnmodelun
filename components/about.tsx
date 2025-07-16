"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const About: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const sections = [
    {
      title: "Our Vision",
      short: "Empowering young minds.",
      full: "To spark leadership and empathy through meaningful dialogue and global awareness.",
    },
    {
      title: "Our Mission",
      short: "Platform for growth.",
      full: "To create a safe, dynamic space where students grow as thinkers, speakers, and future leaders.",
    },
    {
      title: "What Makes Us, Us",
      short: "A fresh perspective.",
      full: "Beginner-friendly. Bold topics. Diverse secretariat. A MUN designed for every kind of delegate.",
    },
    {
      title: "Why Join Us?",
      short: "Real change starts here.",
      full: "Because your voice matters. GIISMUN gives you the tools to speak up and stand out.",
    },
  ];

  return (
    <section
      id="About"
      className="relative min-h-screen"
      style={{ padding: "7vh 5vw", color: "black" }}
    >
      <div>
        <h1
          style={{
            fontSize: isMobile ? "2rem" : "3rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          About Us
        </h1>
        <p
          style={{
            fontSize: isMobile ? "0.9rem" : "1.1rem",
            lineHeight: "1.7",
          }}
        >
          At GIIS Noida, we believe that the leaders of tomorrow are shaped by
          the conversations they have today. GIISMUN invites students from
          diverse backgrounds to step into the shoes of diplomats, engage in
          compelling dialogue, and tackle some of the world's most pressing
          challenges. It’s a space where global perspectives converge with
          youthful passion, where every motion, clause, and resolution has the
          power to inspire change, not just in committees, but in hearts and
          minds.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(280px, 1fr))",
          gap: isMobile ? "15px" : "30px",
          marginTop: "30px",
        }}
      >
        {sections.map(({ title, short, full }, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 0 30px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 255, 255, 0.2)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "20px",
              padding: isMobile ? "14px" : "20px",
              overflow: "hidden",
              position: "relative",
              cursor: "default",
              color: "black",
            }}
          >
            <h3
              style={{
                fontSize: isMobile ? "1.1rem" : "1.5rem",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: isMobile ? "0.95rem" : "1rem",
                marginBottom: "8px",
              }}
            >
              {short}
            </p>
            <p
              style={{
                fontSize: isMobile ? "0.92rem" : "0.95rem",
              }}
            >
              {full}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
