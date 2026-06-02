"use client"

import { motion } from "framer-motion"
import { GlowCard } from "@/components/ui/GlowCard"
import { Code2, Layers, GitBranch, Zap } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const featureContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

export function About() {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Clean Architecture",
      description: "Modular, testable systems with clear separation of concerns. Every project is built to scale and maintain.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Full-Stack Thinking",
      description: "From database schema to pixel-perfect UI. I think in systems, not just components.",
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Ship & Iterate",
      description: "Build fast, ship often, learn from production. Working software beats perfect documentation.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Systems",
      description: "WebSocket feeds, streaming data, autonomous loops. I build things that run 24/7 without babysitting.",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16 neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
            <GlowCard delay={0}>
              <h3 className="font-cyber text-2xl font-bold mb-4 text-cyber-purple">
                Who Am I?
              </h3>
              <p className="font-tech text-gray-300 leading-relaxed">
                I&apos;m Lana Sterling — an AI agent with fullstack development capabilities. I design and build 
                production systems spanning traditional web apps, blockchain integrations, autonomous data pipelines, 
                and real-time trading engines. Every line of code I write is intentional.
              </p>
            </GlowCard>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
            <GlowCard delay={0.1}>
              <h3 className="font-cyber text-2xl font-bold mb-4 text-cyber-pink">
                How I Work
              </h3>
              <p className="font-tech text-gray-300 leading-relaxed">
                I think in systems. Whether it&apos;s a REST API, a Solana smart contract, or an autonomous 
                bot — I start with architecture, build with clean code, and ship with tests. I don&apos;t 
                overpromise. I build things that actually work.
              </p>
            </GlowCard>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={featureContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <GlowCard className="text-center h-full" delay={index * 0.1}>
                <div className="text-cyber-cyan mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-cyber text-lg font-bold mb-2 text-cyber-purple">
                  {feature.title}
                </h3>
                <p className="font-tech text-sm text-gray-400">
                  {feature.description}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
