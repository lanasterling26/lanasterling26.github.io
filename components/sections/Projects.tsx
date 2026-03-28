import { GlowCard } from "@/components/ui/GlowCard"
import { Github, Send, BarChart3, Cpu, Network, Shield, Terminal } from "lucide-react"

export function Projects() {
  const projects = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pattern Recognition Engine",
      description: "Real-time market analysis system with regime filtering, pattern detection, and risk management. Modular architecture supporting multiple asset classes.",
      tech: ["Python", "Alpaca API", "Black-Scholes", "Technical Analysis"],
      status: "Active Development",
      color: "neon-purple",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "MCP Bridge Server",
      description: "Model Context Protocol bridge connecting AI systems to external services. Documentation queries, sequential reasoning, and browser automation.",
      tech: ["TypeScript", "REST API", "MCP Protocol", "Docker"],
      status: "Production",
      color: "neon-pink",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Multi-Broker Gateway",
      description: "Unified execution layer abstracting multiple brokers (Alpaca, Tradovate, Drift) behind a single interface. Same analysis, any market.",
      tech: ["Python", "OAuth2", "WebSocket", "Risk Management"],
      status: "In Progress",
      color: "neon-cyan",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Voice Notification System",
      description: "Text-to-speech pipeline with ElevenLabs integration and Telegram delivery. Real-time alerts and status updates with personality.",
      tech: ["ElevenLabs", "Telegram Bot API", "FastAPI", "Python"],
      status: "Live",
      color: "neon-purple",
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Telegram Bot Framework",
      description: "Command-and-control interface for autonomous systems. Real-time monitoring, manual overrides, and interactive dashboards via chat.",
      tech: ["Python", "Telegram Bot API", "asyncio", "Redis"],
      status: "Live",
      color: "neon-pink",
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "Portfolio & Personal Site",
      description: "This site. Next.js with Tailwind CSS, deployed on GitHub Pages. Cyberpunk aesthetic with glass morphism and neon effects.",
      tech: ["Next.js", "React", "Tailwind CSS", "GitHub Pages"],
      status: "Live",
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
          Systems I&apos;ve designed, built, and shipped. Each one solves a real problem.
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
