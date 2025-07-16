import { NavBarDemo } from "@/components/NavBarDemo"
import TimelineDemo from "@/components/timeline-demo"
import { motion } from "framer-motion"
import MotionSection from "@/components/MotionSection"
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo"
import { HeroDemo } from "@/components/hero"
import CountdownSection from "@/components/CountdownSection"
import Sec from "@/components/Sec"
import About from "@/components/about"
import { RegisterButton } from "@/components/RegisterButton"
import { Footer7 } from "@/components/footer"



export default function Page() {
  return (
    <div id="Home">
      <div><HeroDemo /></div>
      <NavBarDemo />
      <About />
      <RegisterButton />

      {/* Anchor section */}
      <div id="Timeline">
        <TimelineDemo />
        
        <img src="Giis Background Removed.png" alt="Global Indian International School" className="top-left-logo"></img>
      </div>
      <div id="Committees">
      <MotionSection />
      </div>
      <div id="sec">
      <Sec />
      </div>
      <div>
        <MacbookScrollDemo />
        <CountdownSection />
      </div>
      <Footer7 />
      </div>
    
  )
}
