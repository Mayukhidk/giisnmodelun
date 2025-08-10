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
import ArticlesGridExample from "@/components/ArticlesPage";

export default function Page() {
  return (
    <div id="Home" className="w-full">
      <img
        src="Giis Background Removed.png"
        alt="Global Indian International School"
        className="top-left-logo max-w-full h-auto"
        style={{ maxWidth: "100%", height: "auto" }}
      />
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
        <div>
          <div>
            <AnimatedTestimonialsDemo />
            <ArticlesGridExample />
          </div>
        </div>
      </div>
      <div>
        <DownloadCenter />
        <MacbookScrollDemo />
        <WorldMapDemo />
        <Foot />
      </div>
    </div>
  )
}
