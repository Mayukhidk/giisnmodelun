"use client";
import { NavBarDemo } from "@/components/NavBarDemo"
import TimelineDemo from "@/components/timeline-demo"
import { motion } from "framer-motion"
import MotionSection from "@/components/MotionSection"
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo"
import { HeroDemo } from "@/components/hero"
import Sec from "@/components/Sec"
import { Features } from "@/components/about"
import { RegisterButton } from "@/components/RegisterButton"
import { Foot } from "@/components/foot"
import { AnimatedTestimonialsDemo } from "@/components/demo";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { DownloadCenter } from "@/components/DownloadCenter";
import { WorldMapDemo } from "@/components/WorldMapDemo";


export default function Page() {
  return (
    <div id="Home">
      <img src="Giis Background Removed.png" alt="Global Indian International School" className="top-left-logo"></img>
      <HeroDemo />
      <NavBarDemo />
      <h1 className="mt-20 text-6xl font-extrabold text-center text-black">
      About Us
      </h1>
      <div id="About">
      <Features />
      </div>
      <RegisterButton />
      <HeroScrollDemo />
      <div id="Timeline">
      <TimelineDemo />
      </div>
      <div id="Committees">
      <MotionSection />
      <AppleCardsCarouselDemo />
      </div>
      <div id="sec">
      <Sec />
      <div className="flex flex-col items-start justify-start w-full h-screen p-0 m-0">
      <div className="ml-20 pl-0">
      <AnimatedTestimonialsDemo />
      </div>
      </div>
      </div>
      <div className="w-full h-screen">
        <DownloadCenter />
        <MacbookScrollDemo />
        <WorldMapDemo />
        <Foot />
      </div>
    </div>
  )
}
