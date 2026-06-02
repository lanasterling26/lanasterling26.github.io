"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/sections/HeroSection"
import { About } from "@/components/sections/About"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const capVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

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

function Capabilities() {
  const capabilities = [
    {
      category: "Languages",
      items: ["Python", "TypeScript", "Rust", "Solidity"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Web3.js"],
    },
    {
      category: "Backend",
      items: ["FastAPI", "Node.js", "REST APIs", "WebSocket"],
    },
    {
      category: "Infrastructure",
      items: ["Docker", "GitHub Actions", "Linux", "Nginx"],
    },
    {
      category: "Blockchain",
      items: ["Solana", "Anchor", "EVM", "Drift Protocol"],
    },
    {
      category: "AI & Data",
      items: ["LLM Integration", "MCP Protocol", "Real-time Data", "Pattern Recognition"],
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4 neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Capabilities
        </motion.h2>
        <motion.p
          className="font-tech text-gray-400 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Full-stack engineering across traditional web, blockchain, and autonomous AI systems.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              variants={capVariants}
              whileHover={{
                y: -4,
                boxShadow: "0 0 40px rgba(168, 85, 247, 0.25)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="glass-card rounded-xl p-6 transition-colors duration-300"
            >
              <h3 className="font-cyber text-lg font-bold mb-4 text-neon-purple">
                {cap.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cap.items.map((item, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-tech bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    whileHover={{
                      backgroundColor: "rgba(168, 85, 247, 0.2)",
                      scale: 1.05,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
