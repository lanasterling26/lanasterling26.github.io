"use client"

import { useEffect, useRef, useCallback } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const mouseRef = useRef({ x: 0, y: 0 })

  const updateFollower = useCallback(() => {
    const { x, y } = posRef.current
    const { x: mx, y: my } = mouseRef.current
    posRef.current.x += (mx - x) * 0.15
    posRef.current.y += (my - y) * 0.15

    if (followerRef.current) {
      followerRef.current.style.transform = `translate(${posRef.current.x - 15}px, ${posRef.current.y - 15}px)`
    }

    requestAnimationFrame(updateFollower)
  }, [])

  useEffect(() => {
    // Check for touch devices
    if ("ontouchstart" in window) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }

    const handleMouseDown = () => {
      cursorRef.current?.classList.add("scale-75")
      followerRef.current?.classList.add("scale-150")
    }

    const handleMouseUp = () => {
      cursorRef.current?.classList.remove("scale-75")
      followerRef.current?.classList.remove("scale-150")
    }

    const handleLinkEnter = () => {
      cursorRef.current?.classList.add("mix-blend-difference")
      followerRef.current?.classList.add("border-neon-cyan", "border-2")
    }

    const handleLinkLeave = () => {
      cursorRef.current?.classList.remove("mix-blend-difference")
      followerRef.current?.classList.remove("border-neon-cyan", "border-2")
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    // Track interactive elements
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", handleLinkEnter)
      el.addEventListener("mouseleave", handleLinkLeave)
    })

    requestAnimationFrame(updateFollower)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [updateFollower])

  if (typeof window !== "undefined" && "ontouchstart" in window) return null

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-neon-purple pointer-events-none z-[9999]"
        style={{ transition: "transform 0.1s ease-out, width 0.2s, height 0.2s" }}
      />
      {/* Follower ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-purple/50 pointer-events-none z-[9998]"
        style={{
          transition: "border-color 0.3s, width 0.3s, height 0.3s",
          boxShadow: "0 0 15px rgba(168, 85, 247, 0.2)",
        }}
      />
    </>
  )
}
