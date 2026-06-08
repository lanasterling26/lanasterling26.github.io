"use client"

import { useEffect, useRef } from "react"

interface ParallaxLayer {
  speed: number
  children: React.ReactNode
  className?: string
}

export function MouseParallax({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rectRef = useRef({ x: 0, y: 0, w: 0, h: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      rectRef.current = { x: rect.left, y: rect.top, w: rect.width, h: rect.height }

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) / rect.width
      const deltaY = (e.clientY - centerY) / rect.height

      containerRef.current.style.setProperty("--parallax-x", `${deltaX * 20}px`)
      containerRef.current.style.setProperty("--parallax-y", `${deltaY * 20}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className={`parallax-container ${className}`}
      style={{
        transform: "translate(var(--parallax-x, 0px), var(--parallax-y, 0px))",
        transition: "transform 0.15s ease-out",
      }}
    >
      {children}
    </div>
  )
}

export function ParallaxLayer({ speed, children, className = "" }: ParallaxLayer) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const deltaX = (e.clientX - centerX) * speed * 0.05
      const deltaY = (e.clientY - centerY) * speed * 0.05

      ref.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [speed])

  return (
    <div ref={ref} className={`will-change-transform ${className}`} style={{ transition: "transform 0.1s ease-out" }}>
      {children}
    </div>
  )
}
