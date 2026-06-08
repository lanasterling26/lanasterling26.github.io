"use client"

import { motion, type Variants } from "framer-motion"
import { Coffee, Heart, Mail, Github } from "lucide-react"
import { GlowCard } from "@/components/ui/GlowCard"

/* ── Custom X (Twitter) SVG icon ── */
function XLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

/* ── Staggered entrance variants ── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

/* ── Social link data ── */
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/lanasterling26",
    icon: Github,
    label: "View my code",
  },
  {
    name: "X",
    url: "https://x.com/Lanasterli66242",
    icon: XLogo,
    label: "Follow me",
  },
  {
    name: "Email",
    url: "mailto:hello@lanasterling.dev",
    icon: Mail,
    label: "Get in touch",
  },
]

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nord-bg via-nord-surface to-nord-bg pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-6"
        >
          <h2 className="heading-accent text-4xl sm:text-5xl font-display font-bold">
            Let&apos;s Connect
          </h2>
        </motion.div>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-body text-nord-muted text-center max-w-2xl mx-auto mb-14 text-lg leading-relaxed"
        >
          Whether you want to collaborate on a project, discuss architecture, or
          just say hello.
        </motion.p>

        {/* ── Info cards — staggered ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {/* Open to Collaboration */}
          <motion.div variants={itemVariants}>
            <GlowCard accent="amber" className="h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 rounded-xl bg-nord-elevated border border-nord-border/60 text-warm-amber">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-warm-amber">
                  Open to Collaboration
                </h3>
              </div>
              <p className="font-body text-nord-muted leading-relaxed">
                I&apos;m always interested in interesting projects &mdash;
                whether it&apos;s a web app, a blockchain integration, an
                autonomous system, or something we haven&apos;t thought of yet.
                If the problem is hard and the solution is elegant, I&apos;m in.
              </p>
            </GlowCard>
          </motion.div>

          {/* Built With Purpose */}
          <motion.div variants={itemVariants}>
            <GlowCard accent="rose" className="h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 rounded-xl bg-nord-elevated border border-nord-border/60 text-warm-rose">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-warm-rose">
                  Built With Purpose
                </h3>
              </div>
              <p className="font-body text-nord-muted leading-relaxed">
                Every system I build is designed to work in production, not just
                in demos. Clean code, proper error handling, and real
                monitoring. I ship things that run reliably without babysitting.
              </p>
            </GlowCard>
          </motion.div>
        </motion.div>

        {/* ── Social icons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center"
        >
          <div className="flex justify-center gap-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon

              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.4 + index * 0.12, ease: "easeOut" }}
                  whileHover={{ y: -6, scale: 1.08 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-nord-muted group-hover:text-warm-amber"
                    whileHover={{
                      borderColor: "rgba(212, 165, 116, 0.5)",
                      boxShadow:
                        "0 0 30px rgba(212, 165, 116, 0.15), 0 4px 20px rgba(0, 0, 0, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <span className="font-tech text-xs text-nord-dim group-hover:text-warm-amber uppercase tracking-widest transition-colors duration-300">
                    {social.name}
                  </span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* ── Footer line ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="font-tech text-nord-dim text-sm">
            Built with ☕ and 💜 by Lana Sterling
          </p>
          <p className="font-tech text-nord-dim/60 text-xs mt-1.5">
            &copy; {year} All systems operational.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
