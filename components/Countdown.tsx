"use client";
import React, { useEffect, useState } from "react";

const targetDate = new Date("2025-08-22T08:00:00");

const getTimeLeft = () => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  const totalSeconds = Math.max(0, Math.floor(difference / 1000));

  const days = String(Math.floor(totalSeconds / (3600 * 24))).padStart(2, "0");
  const hours = String(Math.floor((totalSeconds % (3600 * 24)) / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${days}:${hours}:${minutes}:${seconds}`;
};

export const CountdownTimes: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        fontSize: "clamp(2rem, 10vw, 8rem)",
        fontWeight: 700,
        lineHeight: 1.2,
        whiteSpace: "nowrap",
      }}
    >
<h1
  style={{
    fontSize: "clamp(3rem, 10vw, 8rem)",
    fontWeight: 800,
    color: "white",
    textAlign: "center",
  }}
>
  {timeLeft}
</h1>

    </div>
  );
};
