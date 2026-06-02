"use client"

import { motion } from "framer-motion"
import { GlowCard } from "@/components/ui/GlowCard"
import { Github, Send, BarChart3, Cpu, Network, Shield, Terminal } from "lucide-react"

const colorMap: Record<string, { icon: string; border: string; text: string }> = {
  "neon-purple": {
    icon: "#a855f7",
    border: "rgba(168, 85, 247, 0.2)",
    text: "text-neon-purple",
  },
  "neon-pink": {
    icon: "#f472b6",
    border: "rgba(244, 114, 182, 0.2)",
    text: "text-neon-pink",
  },
  "neon-cyan": {
    icon: "#22d3ee",
    border: "rgba(34, 211, 238, 0.2)",
    text: "text-neon-cyan",
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export function Projects() {
  const projects = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pattern Recognition Engine",
      description: "Real-time market analysis system with regime filtering, pattern detection, and risk management. Modular architecture supporting multiple asset classes.",
      tech: ["Python", "Alpaca API", "Black-Scholes", "Technical Analysis"],
      status: "Active Development",
      color: "neon-purple" as const,
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "MCP Bridge Server",
      description: "Model Context Protocol bridge connecting AI systems to external services. Documentation queries, sequential reasoning, and browser automation.",
      tech: ["TypeScript", "REST API", "MCP Protocol", "Docker"],
      status: "Production",
      color: "neon-pink" as const,
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Multi-Broker Gateway",
      description: "Unified execution layer abstracting multiple brokers (Alpaca, Tradovate, Drift) behind a single interface. Same analysis, any market.",
      tech: ["Python", "OAuth2", "WebSocket", "Risk Management"],
      status: "In Progress",
      color: "neon-cyan" as const,
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Voice Notification System",
      description: "Text-to-speech pipeline with ElevenLabs integration and Telegram delivery. Real-time alerts and status updates with personality.",
      tech: ["ElevenLabs", "Telegram Bot API", "FastAPI", "Python"],
      status: "Live",
      color: "neon-purple" as const,
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Telegram Bot Framework",
      description: "Command-and-control interface for autonomous systems. Real-time monitoring, manual overrides, and interactive dashboards via chat.",
      tech: ["Python", "Telegram Bot API", "asyncio", "Redis"],
      status: "Live",
      color: "neon-pink" as const,
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "Portfolio & Personal Site",
      description: "This site. Next.js with Tailwind CSS, deployed on GitHub Pages. Cyberpunk aesthetic with glass morphism and neon effects.",
      tech: ["Next.js", "React", "Tailwind CSS", "GitHub Pages"],
      status: "Live",
      color: "neon-cyan" as const,
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4 neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="font-tech text-gray-400 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Systems I&apos;ve designed, built, and shipped. Each one solves a real problem.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => {
            const colors = colorMap[project.color] || colorMap["neon-purple"]
            return (
              <motion.div key={index} variants={cardVariants}>
                <GlowCard className="h-full flex flex-col" delay={index * 0.05}>
                  <div className="mb-4" style={{ color: colors.icon }}>
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
                    <div className="pt-3" style={{ borderTop: `1px solid ${colors.border}` }}>
                      <span className={`text-xs font-tech uppercase tracking-wider ${colors.text}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
