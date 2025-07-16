import { DisplayCardsDemo } from "@/components/DisplayCardsDemo"
import { NavBarDemo } from "../components/NavBarDemo"
import TimelineDemo from "../components/timeline-demo"
import { motion } from "framer-motion"
import MotionSection from "@/components/MotionSection"
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo"
import { HeroDemo } from "@/components/hero"
import CountdownSection from "@/components/CountdownSection"
import Sec from "@/components/Sec"
import About from "@/components/about"



export default function Page() {
  return (
    <div id="Home">
      <div><HeroDemo /></div>
      <NavBarDemo />
      <About />

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
             <footer
          className="footer"
          style={{
            height: "300px",  
            width: "100%",
            background: "black",
            color: "white",
            borderTop: "10px solid white",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div style={{ flex: 1 }}>
            <p style={{ marginBottom: "6px" }}>
              For any queries, reach us at:<br />
              <a href="tel:8287065486" style={{ color: "#a2d2ff", textDecoration: "none" }}>8287065486</a> or{" "}
              <a href="mailto:giismun@gmail.com" style={{ color: "#a2d2ff", textDecoration: "none" }}>giismun@gmail.com</a>
            </p>
            <p style={{ opacity: 0.7 }}>© 2025 GIIS Model United Nations</p>
          </div>
          <div style={{ flex: 1, textAlign: "right" }}>
            <p style={{ marginBottom: "6px" }}>Follow us on:</p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <a href="https://www.instagram.com/giis_noida_mun/" target="_blank" rel="noopener noreferrer">
                <img src="/instagram-icon.png" alt="Instagram" style={{ width: "24px", height: "24px" }} />
              </a>
              <a href="https://www.linkedin.com/company/giis-noida-mun/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin-icon.png" alt="LinkedIn" style={{ width: "24px", height: "24px" }} />
              </a>
            </div>
          </div>
        </footer>
    </div>
    
  )
}
