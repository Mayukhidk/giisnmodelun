"use client";

import DisplayCards from "../components/display-cards";
import { Sparkles } from "lucide-react";

const defaultCards = [
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Beginner Committee Grade 6-8",
    description: "World Health Organisation",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-0 translate-y-0 hover:-translate-y-10 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Media",
    description: "International Press Corps.",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Indian Committee",
    description: "All India Political Party Meet",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:-translate-y-2 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
];


function DisplayCardsDemo() {
  return (
    <div className="w-full px-6 flex flex-col lg:flex-row items-start justify-between gap-10">
      <div className="w-full px-6 flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left: Cards */}
        <div className="w-full px-10 flex flex-col lg:flex-row items-start justify-between gap-10">
          <DisplayCards cards={defaultCards} />
        </div>

        {/* Right: Heading */}
        <div className="w-full lg:w-2/3 flex flex-col justify-start items-end mt-10 lg:mt-0 -ml-[140px]">
          <h2 className="text-6xl lg:text-9xl font-bold text-black leading-none text-right mb-8">
            Top<br />Committees
          </h2>
        </div>
      </div>
      </div>
  );
}

export { DisplayCardsDemo };
