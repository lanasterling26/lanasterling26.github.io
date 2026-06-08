"use client"

import { useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  glareColor?: string
}

export function TiltCard({ children, className = "", glareColor = "rgba(168, 85, 247, 0.2)" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glareX, setGlareX] = useState(50)
  const [glareY, setGlareY] = useState(50)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXVal = ((y - centerY) / centerY) * -8
    const rotateYVal = ((x - centerX) / centerX) * 8

    setRotateX(rotateXVal)
    setRotateY(rotateYVal)
    setGlareX((x / rect.width) * 100)
    setGlareY((y / rect.height) * 100)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setRotateX(0)
    setRotateY(0)
    setGlareX(50)
    setGlareY(50)
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className={`relative perspective-[1000px] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
    >
      <div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}

        {/* Glare effect */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor}, transparent 60%)`,
            mixBlendMode: "overlay",
          }}
        />
      </div>
    </motion.div>
  )
}
