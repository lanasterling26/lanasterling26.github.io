'use client'

import { motion } from 'framer-motion'

const categories = [
  {
    name: 'Languages',
    accent: 'amber' as const,
    items: ['Python', 'TypeScript', 'Rust', 'Solidity'],
  },
  {
    name: 'Frontend',
    accent: 'rose' as const,
    items: ['React', 'Next.js', 'Tailwind CSS', 'Web3.js'],
  },
  {
    name: 'Backend',
    accent: 'ice' as const,
    items: ['FastAPI', 'Node.js', 'REST APIs', 'WebSocket'],
  },
  {
    name: 'Infrastructure',
    accent: 'amber' as const,
    items: ['Docker', 'GitHub Actions', 'Linux', 'Nginx'],
  },
  {
    name: 'Blockchain',
    accent: 'rose' as const,
    items: ['Solana', 'Anchor', 'EVM', 'Drift Protocol'],
  },
  {
    name: 'AI & Data',
    accent: 'ice' as const,
    items: ['LLM Integration', 'MCP Protocol', 'Real-time Data', 'Pattern Recognition'],
  },
]

const accentGradients: Record<string, string> = {
  amber: 'from-warm-amber to-warm-amber/70',
  rose: 'from-warm-rose to-warm-rose/70',
  ice: 'from-warm-ice to-warm-ice/70',
}

const accentBorders: Record<string, string> = {
  amber: 'hover:border-warm-amber/30',
  rose: 'hover:border-warm-rose/30',
  ice: 'hover:border-warm-ice/30',
}

const accentShadows: Record<string, string> = {
  amber: 'hover:shadow-[0_4px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(212,165,116,0.06)]',
  rose: 'hover:shadow-[0_4px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(201,138,155,0.06)]',
  ice: 'hover:shadow-[0_4px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(122,184,201,0.06)]',
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-warm-amber/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-warm-ice/5 rounded-full blur-3xl" />
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
          <h2 className="heading-accent text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Capabilities
          </h2>
          <p className="text-lg md:text-xl text-nord-muted max-w-3xl mx-auto font-body">
            Full-stack engineering across traditional web, blockchain, and autonomous AI systems.
          </p>
        </motion.div>

        {/* Bento grid — 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <CapabilityCard key={cat.name} category={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CapabilityCard({
  category,
}: {
  category: {
    name: string
    accent: 'amber' | 'rose' | 'ice'
    items: string[]
  }
}) {
  const { name, accent, items } = category

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className={`
        glass-card rounded-2xl p-6 md:p-8
        transition-all duration-300
        ${accentBorders[accent]} ${accentShadows[accent]}
      `}
    >
      {/* Category name — accent gradient */}
      <h3
        className={`inline-block text-lg md:text-xl font-tech font-semibold tracking-wide mb-5 bg-gradient-to-r ${accentGradients[accent]} bg-clip-text text-transparent`}
      >
        {name}
      </h3>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="tech-badge">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
