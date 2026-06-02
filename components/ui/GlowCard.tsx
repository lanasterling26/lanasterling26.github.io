"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function GlowCard({ children, className, delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{
        y: -4,
        boxShadow: "0 0 60px -15px rgba(139, 92, 246, 0.5)",
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
