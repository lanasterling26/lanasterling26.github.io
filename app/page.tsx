import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/sections/HeroSection"
import { About } from "@/components/sections/About"
import { Projects } from "@/components/sections/Projects"
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
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
          Capabilities
        </h2>
        <p className="font-tech text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Full-stack engineering across traditional web, blockchain, and autonomous AI systems.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((cap, index) => (
            <div key={index} className="glass-card rounded-xl p-6 hover:shadow-neon-purple transition-all duration-500">
              <h3 className="font-cyber text-lg font-bold mb-4 text-neon-purple">
                {cap.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cap.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-tech bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
