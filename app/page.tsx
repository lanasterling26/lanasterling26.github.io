"use client"

import { Navigation } from "@/components/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import About from "@/components/sections/About"
import Capabilities from "@/components/sections/Capabilities"
import Projects from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <div id="about">
        <About />
      </div>
      <div id="capabilities">
        <Capabilities />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  )
}
