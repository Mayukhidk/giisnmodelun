"use client";

import { cn } from "../lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[90vw] sm:w-[22rem] sm:-skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted focus:bg-muted active:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-blue-800 p-1">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg">{description}</p>
      <p className="text-muted-foreground">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className:
        "hover:-translate-y-4 active:-translate-y-4 focus:-translate-y-4 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale hover:grayscale-0 before:left-0 before:top-0 before:transition-opacity before:duration-700 before:opacity-100 hover:before:opacity-0 active:before:opacity-0 focus:before:opacity-0 sm:[grid-area:stack]",
    },
    {
      className:
        "sm:[grid-area:stack] sm:translate-x-16 sm:translate-y-10 hover:sm:-translate-y-2 active:sm:-translate-y-2 focus:sm:-translate-y-2 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale hover:grayscale-0 before:left-0 before:top-0 before:transition-opacity before:duration-700 before:opacity-100 hover:before:opacity-0 active:before:opacity-0 focus:before:opacity-0",
    },
    {
      className:
        "sm:[grid-area:stack] sm:translate-x-32 sm:translate-y-20 hover:sm:-translate-y-1 active:sm:-translate-y-1 focus:sm:-translate-y-1 grayscale hover:grayscale-0",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid sm:[grid-template-areas:'stack'] place-items-center gap-4 opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
