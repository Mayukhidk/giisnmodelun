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
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 overflow-x-hidden">
      {/* Left: Cards */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
      <DisplayCards cards={defaultCards} />
      </div>

      {/* Right: Heading */}
      <div className="w-full lg:w-2/3 flex flex-col justify-start items-center lg:items-end mt-8 lg:mt-0 lg:-ml-[140px]">
      <h2 className="text-4xl sm:text-6xl lg:text-9xl font-bold text-black leading-none text-left lg:text-right mb-6">
        Top<br />Committees
      </h2>
      </div>
    </div>
  );
}

export { DisplayCardsDemo };
