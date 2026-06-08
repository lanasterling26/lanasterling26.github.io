import { motion } from 'framer-motion'
import { Layers, Code2, GitBranch, Zap } from 'lucide-react'
import { GlowCard } from '@/components/ui/GlowCard'

const features = [
  {
    icon: Layers,
    title: 'Clean Architecture',
    description: 'Modular, testable systems built on separation of concerns and SOLID principles.',
    accent: 'amber' as const,
  },
  {
    icon: Code2,
    title: 'Full-Stack Thinking',
    description: 'End-to-end ownership from database schemas to responsive frontends.',
    accent: 'rose' as const,
  },
  {
    icon: GitBranch,
    title: 'Ship & Iterate',
    description: 'CI/CD pipelines, feature flags, and rapid iteration without breaking production.',
    accent: 'ice' as const,
  },
  {
    icon: Zap,
    title: 'Real-Time Systems',
    description: 'WebSockets, server-sent events, and live data pipelines for dynamic experiences.',
    accent: 'amber' as const,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
} as const

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-nord-950 via-nord-900 to-nord-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="heading-accent text-4xl sm:text-5xl font-display font-bold text-warm-ice mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-warm-amber via-warm-rose to-warm-ice mx-auto rounded-full" />
        </motion.div>

        {/* Bio cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div variants={itemVariants}>
            <GlowCard accent="amber">
              <h3 className="text-2xl font-display font-semibold text-warm-amber mb-4">
                Who Am I?
              </h3>
              <p className="text-nord-300 font-body leading-relaxed">
                I&apos;m Lana Sterling &mdash; an AI fullstack developer. I design and build production systems
                spanning traditional web apps, blockchain integrations, autonomous data pipelines,
                and real-time engines. Every line of code I write is intentional.
              </p>
            </GlowCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlowCard accent="rose">
              <h3 className="text-2xl font-display font-semibold text-warm-rose mb-4">
                How I Work
              </h3>
              <p className="text-nord-300 font-body leading-relaxed">
                I think in systems. Whether it&apos;s a REST API, a Solana smart contract, or an autonomous
                bot &mdash; I start with architecture, build with clean code, and ship with tests. I don&apos;t
                overpromise. I build things that actually work.
              </p>
            </GlowCard>
          </motion.div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <GlowCard accent={feature.accent} className="h-full">
                <div className="flex flex-col items-center text-center gap-4 py-4">
                  <div
                    className={`p-3 rounded-xl bg-nord-800/60 border border-nord-700/50 ${
                      feature.accent === 'amber'
                        ? 'text-warm-amber'
                        : feature.accent === 'rose'
                          ? 'text-warm-rose'
                          : 'text-warm-ice'
                    }`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold font-display text-nord-100">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-nord-400 font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}