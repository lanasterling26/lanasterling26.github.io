'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GlowCard } from '@/components/ui/GlowCard'
import { DataStream } from '@/components/ui/DataStream'
import { TextScramble } from '@/components/ui/TextScramble'

const projects = [
  {
    title: 'Multi-Broker Gateway',
    subtitle: 'Unified order routing across 6 broker APIs with real-time position sync.',
    accent: 'ice' as const,
    tech: ['Go', 'gRPC', 'Redis Streams', 'Kafka', 'WebSocket'],
    span: 2,
  },
  {
    title: 'Pattern Recognition Engine',
    subtitle: 'Real-time candlestick pattern detection using sliding window algorithms.',
    accent: 'amber' as const,
    tech: ['Rust', 'Python', 'NumPy', 'Pandas', 'WebAssembly'],
    span: 1,
  },
  {
    title: 'MCP Bridge Server',
    subtitle: 'Model Context Protocol bridge enabling AI agents to query live financial data.',
    accent: 'rose' as const,
    tech: ['TypeScript', 'Node.js', 'Express', 'Server-Sent Events'],
    span: 1,
  },
  {
    title: 'Voice Notification System',
    subtitle: 'Synthesised voice alerts for critical market events via ElevenLabs API.',
    accent: 'amber' as const,
    tech: ['Python', 'FastAPI', 'ElevenLabs', 'Redis', 'Twilio'],
    span: 1,
  },
  {
    title: 'Telegram Bot Framework',
    subtitle: 'Modular bot framework with plugin system for trading commands and alerts.',
    accent: 'rose' as const,
    tech: ['Python', 'python-telegram-bot', 'SQLite', 'APScheduler'],
    span: 1,
  },
  {
    title: 'Portfolio',
    subtitle: 'This very site — a Next.js app with Framer Motion animations and bento grid layout.',
    accent: 'ice' as const,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    span: 1,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
} as const

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-warm-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-warm-ice-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="heading-accent text-4xl md:text-5xl lg:text-6xl font-display text-nord-text mb-4">
            Projects
          </h2>
          <p className="text-lg md:text-xl text-nord-muted max-w-2xl mx-auto">
            Systems I've designed, built, and shipped.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
}: {
  project: {
    title: string
    subtitle: string
    accent: 'amber' | 'rose' | 'ice'
    tech: string[]
    span: number
  }
}) {
  const [hovered, setHovered] = useState(false)
  const [dataStreamHovered, setDataStreamHovered] = useState(false)

  return (
    <motion.div
      variants={itemVariants}
      className={`relative ${project.span === 2 ? 'md:col-span-2' : 'md:col-span-1'}`}
      onMouseEnter={() => setDataStreamHovered(true)}
      onMouseLeave={() => setDataStreamHovered(false)}
    >
      {/* Data stream background — hidden by default, shown on hover */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 rounded-2xl overflow-hidden pointer-events-none ${
          dataStreamHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <DataStream accent={project.accent} />
      </div>

      <GlowCard accent={project.accent}>
        <div className="relative z-10 p-6 md:p-8">
          {/* Title */}
          <h3
            className="text-xl md:text-2xl font-display text-nord-text mb-2"
          >
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-nord-muted mb-6 leading-relaxed">
            {project.subtitle}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="relative inline-block"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span className="inline-block px-3 py-1 text-xs font-medium font-tech rounded-full bg-nord-800 text-nord-muted border border-nord-border/40">
                  {hovered ? (
                    <TextScramble text={tech} scrambleSpeed={40} />
                  ) : (
                    tech
                  )}
                </span>
              </span>
            ))}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  )
}
