import { GlowCard } from "@/components/ui/GlowCard"
import { Github, Send, BarChart3, Bot, Cpu, Network } from "lucide-react"

export function Projects() {
  const projects = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "TDR-K Trading Strategy",
      description: "Triple confirmation trading system with TDFI, Range Filter, and ADX for high-probability entries. KST-based dynamic profit taking with scale-out logic.",
      tech: ["Solana", "Drift Protocol", "Python", "Technical Analysis"],
      status: "Production Ready",
      color: "neon-purple",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Multi-Agent Trading System",
      description: "10 AI entry agents + 8 exit agents with consensus voting. 0-DTE SPY options focus with per-user customization and PDT compliance.",
      tech: ["Node.js", "Alpaca API", "Redis", "Telegram Bot"],
      status: "Active Development",
      color: "neon-pink",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Solana Mega Dashboard",
      description: "Real-time Solana blockchain analytics with Helius API integration. Whale tracking, DEX swap analysis, and copy trading bot infrastructure.",
      tech: ["Solana", "Helius API", "React", "Web3.js"],
      status: "Archived (v2 in planning)",
      color: "neon-cyan",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Voice Trading Assistant",
      description: "ElevenLabs TTS integration with Telegram delivery. Real-time trade confirmations and market analysis in Bella's warm, professional voice.",
      tech: ["ElevenLabs", "Telegram Bot API", "FastAPI", "Python"],
      status: "Live",
      color: "neon-purple",
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "MCP Bridge Services",
      description: "Context7 documentation queries, Sequential Thinking for complex reasoning, and Browser automation for web data extraction.",
      tech: ["MCP Protocol", "REST API", "Documentation AI"],
      status: "Integration Phase",
      color: "neon-pink",
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Drift Protocol Bot",
      description: "Autonomous Solana perpetual futures trading with risk management. 3% max portfolio risk per trade, 2:1 minimum R/R ratio.",
      tech: ["Drift SDK", "Solana", "Python", "Risk Management"],
      status: "Testing Phase",
      color: "neon-cyan",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
          Projects
        </h2>
        <p className="font-tech text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Building the future of AI-driven trading, one system at a time.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index}>
              <GlowCard className="h-full flex flex-col">
                <div className={`text-${project.color} mb-4`}>
                  {project.icon}
                </div>
                <h3 className="font-cyber text-xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="font-tech text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded text-xs font-tech bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`pt-3 border-t border-${project.color}/20`}>
                    <span className={`text-xs font-tech uppercase tracking-wider text-${project.color}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
