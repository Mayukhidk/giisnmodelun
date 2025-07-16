import React from "react";
import { MacbookScroll } from "../components/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            So what are you waiting for??? <br /> Hurry Upppp
          </span>
        }
      />
    </div>
  );
}