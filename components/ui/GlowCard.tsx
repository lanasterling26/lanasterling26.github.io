"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type Accent = "amber" | "rose" | "ice"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  accent?: Accent
}

const accentGlows: Record<Accent, string> = {
  amber: "0 0 60px -15px rgba(212, 165, 116, 0.5)",
  rose: "0 0 60px -15px rgba(201, 138, 155, 0.5)",
  ice: "0 0 60px -15px rgba(122, 184, 201, 0.5)",
}

export function GlowCard({ children, className, delay = 0, accent }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{
        y: -4,
        boxShadow: accent ? accentGlows[accent] : "0 0 60px -15px rgba(212, 165, 116, 0.3)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className={cn(
        "glass-card rounded-xl p-6 transition-colors duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
