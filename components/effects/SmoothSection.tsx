"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"

interface SmoothSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
}

export function SmoothSection({ children, className = "", id, delay = 0 }: SmoothSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      {children}
    </motion.section>
  )
}

/** Stagger animation for children */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  )
}

/** Individual stagger item */
export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

/** Counter that animates from 0 to target */
export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  className = "",
}: {
  from?: number
  to: number
  duration?: number
  suffix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView || !ref.current) return

    const startTime = performance.now()
    const startVal = from
    const diff = to - from

    let rafId: number

    const update = (now: number) => {
      const elapsed = (now - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(startVal + diff * eased)

      if (ref.current) {
        ref.current.textContent = `${current}${suffix}`
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(update)
      }
    }

    rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [isInView, from, to, duration, suffix])

  return (
    <span ref={ref} className={className}>
      {from}{suffix}
    </span>
  )
}
