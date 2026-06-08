"use client"

import { useEffect, useRef } from "react"

interface DataStreamProps {
  className?: string
  accent?: 'amber' | 'rose' | 'ice'
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "212, 165, 116"
}

const accentColors: Record<string, string> = {
  amber: '#d4a574',
  rose: '#c98a9b',
  ice: '#7ab8c9',
}

export function DataStream({ className = "", accent = 'amber' }: DataStreamProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let frame: number
    let points: { x: number; y: number; vx: number }[] = []
    const color = accentColors[accent]
    const rgb = hexToRgb(color)

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const init = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      const count = Math.floor(w / 30)
      points = Array.from({ length: count }, (_, i) => ({
        x: (i / count) * w,
        y: Math.random() * h,
        vx: 0.3 + Math.random() * 0.2,
      }))
    }

    resize()
    init()

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      for (const pt of points) {
        pt.x += pt.vx
        if (pt.x > w) {
          pt.x = 0
          pt.y = Math.random() * h
        }
        const alpha = 0.15 + Math.sin(pt.x * 0.01) * 0.08
        ctx.beginPath()
        ctx.arc(pt.x, pt.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb}, ${alpha})`
        ctx.fill()
      }

      // Scanning line
      const gradient = ctx.createLinearGradient(0, 0, 0, h)
      gradient.addColorStop(0, "transparent")
      gradient.addColorStop(0.45, `rgba(${rgb}, 0.03)`)
      gradient.addColorStop(0.5, `rgba(${rgb}, 0.08)`)
      gradient.addColorStop(0.55, `rgba(${rgb}, 0.03)`)
      gradient.addColorStop(1, "transparent")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, w, h)

      frame = requestAnimationFrame(draw)
    }

    frame = requestAnimationFrame(draw)
    window.addEventListener("resize", () => { resize(); init() })
    return () => cancelAnimationFrame(frame)
  }, [accent])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  )
}