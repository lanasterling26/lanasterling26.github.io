"use client"

import { useRef, useCallback, useState } from "react"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  as?: "button" | "a"
  href?: string
  onClick?: () => void
  strength?: number
}

export function MagneticButton({
  children,
  className = "",
  as = "button",
  href,
  onClick,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      setPosition({ x: x * strength, y: y * strength })
    },
    [strength]
  )

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
  }, [])

  const Tag = as

  if (as === "a") {
    return (
      <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-block">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          {children}
        </a>
      </div>
    )
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-block">
      <button
        onClick={onClick}
        className={className}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        {children}
      </button>
    </div>
  )
}
