"use client"

import { useEffect, useRef, useState } from "react"
import { motion, type Variants } from "framer-motion"
import { animate, random } from "animejs"
import { MeshNetwork } from "@/components/ui/MeshNetwork"

// ──────────────────────────────────────────────
// Nordic Minimalist Tech colour tokens
// ──────────────────────────────────────────────
const COLORS = {
  amber: "#d4a574",
  rose: "#c98a9b",
  ice: "#7ab8c9",
  bg: "#0f0f13",
  text: "#e8e6e3",
  muted: "#8b8a91",
} as const

// ──────────────────────────────────────────────
// framer‑motion: staggered entrance variants
// ──────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // ── anime.js v4: warm ambient particle loop ──────────
  useEffect(() => {
    if (!mounted) return
    const section = sectionRef.current
    if (!section) return

    const particleContainer = document.createElement("div")
    particleContainer.id = "ambient-particles"
    particleContainer.style.cssText =
      `position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 1;`
    section.appendChild(particleContainer)

    const particles: HTMLDivElement[] = []
    const animations: ReturnType<typeof animate>[] = []

    for (let i = 0; i < 24; i++) {
      const dot = document.createElement("div")
      const size = 4 + Math.random() * 6
      dot.style.cssText = `
        position: absolute;
        width: ${size}px; height: ${size}px;
        border-radius: 50%;
        background: radial-gradient(circle, ${COLORS.amber}, transparent);
        opacity: ${0.15 + Math.random() * 0.25};
        filter: blur(${1 + Math.random() * 2}px);
        left: ${Math.random() * 100}%; top: ${Math.random() * 100}%;
      `
      particleContainer.appendChild(dot)
      particles.push(dot)

      const anim = animate(dot, {
        translateX: [0, random(-60, 60)],
        translateY: [0, random(-40, 40)],
        opacity: [
          { value: 0.1 + Math.random() * 0.3, duration: 2000 },
          { value: 0.3 + Math.random() * 0.4, duration: 2000 },
        ],
        scale: [
          { value: 0.8 + Math.random() * 0.6, duration: 2500 },
          { value: 0.5 + Math.random() * 0.4, duration: 2500 },
        ],
        duration: 4000 + Math.random() * 4000,
        easing: "easeInOutQuad",
        loop: true,
        direction: "alternate",
      })
      animations.push(anim)
    }

    // ── Heading gentle float ──────────────
    const heading = headingRef.current
    let headingAnim: ReturnType<typeof animate> | null = null
    if (heading) {
      headingAnim = animate(heading, {
        translateY: [0, -6, 0],
        duration: 6000,
        easing: "easeInOutSine",
        loop: true,
        direction: "alternate",
      })
    }

    return () => {
      animations.forEach((a) => a.pause())
      particles.forEach((dot) => dot.remove())
      if (headingAnim) headingAnim.pause()
      particleContainer.remove()
    }
  }, [mounted])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Background mesh canvas */}
      <div className="absolute inset-0 z-0">
        <MeshNetwork />
      </div>

      {/* Warm ambient vignette overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            `radial-gradient(ellipse at 50% 40%, ${COLORS.amber}15 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div className="mb-6" variants={badgeVariants}>
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest"
            style={{
              color: COLORS.amber,
              backgroundColor: `${COLORS.amber}18`,
              border: `1px solid ${COLORS.amber}40`,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            AI Fullstack Developer
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          ref={headingRef}
          className="text-5xl font-light leading-tight sm:text-6xl md:text-7xl"
          style={{
            color: COLORS.text,
            fontFamily: "'Fraunces', serif",
          }}
          variants={itemVariants}
        >
          Building systems
          <span
            className="mx-2 bg-gradient-to-r from-warm-amber via-warm-rose to-warm-ice bg-clip-text text-transparent"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            that
          </span>
          ship
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl"
          style={{
            color: COLORS.muted,
            fontFamily: "'Inter', sans-serif",
          }}
          variants={itemVariants}
        >
          Full-stack engineering across web, blockchain, and autonomous systems.
          Clean architecture. Production-first mindset.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          variants={itemVariants}
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300"
            style={{
              color: COLORS.bg,
              backgroundColor: COLORS.amber,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <span>Explore work</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300"
            style={{
              color: COLORS.text,
              border: `1px solid ${COLORS.text}30`,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <span>Get in touch</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
