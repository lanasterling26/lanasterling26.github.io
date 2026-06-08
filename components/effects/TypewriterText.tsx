"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
  cursor?: boolean
  cursorColor?: string
}

export function TypewriterText({
  text,
  className = "",
  delay = 0,
  speed = 50,
  cursor = true,
  cursorColor = "#a855f7",
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let currentIndex = 0

    const startTyping = () => {
      timeout = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(timeout)
          setIsComplete(true)
        }
      }, speed)
    }

    const delayTimeout = setTimeout(startTyping, delay)

    return () => {
      clearTimeout(delayTimeout)
      clearInterval(timeout)
    }
  }, [text, delay, speed])

  return (
    <span className={className}>
      {displayedText}
      {cursor && !isComplete && (
        <motion.span
          className="inline-block ml-0.5 font-thin"
          style={{ color: cursorColor }}
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        >
          |
        </motion.span>
      )}
    </span>
  )
}

/** Split text into individual characters with staggered animation */
export function SplitText({
  text,
  className = "",
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: delay + i * 0.03,
            duration: 0.4,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}
