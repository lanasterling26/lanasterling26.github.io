"use client"

import { useEffect, useRef, useCallback } from "react"

interface TextScrambleProps {
  texts?: string[]
  text?: string
  className?: string
  scrambleSpeed?: number
  holdDuration?: number
}

const CHARS = "!<>-_\\/[]{}—=+*^?#________"

export function TextScramble({ texts, text, className = "", scrambleSpeed = 50, holdDuration = 2000 }: TextScrambleProps) {
  const elRef = useRef<HTMLSpanElement>(null)
  const frameRef = useRef<number>(0)
  const queueRef = useRef<{ from: string; to: string; start: number; end: number }[]>([])
  const frameRequestRef = useRef<number>()

  const resolvedTexts = texts || (text ? [text] : [""])

  const update = useCallback(() => {
    const el = elRef.current
    if (!el) return

    let output = ""
    let complete = 0

    for (let i = 0, len = queueRef.current.length; i < len; i++) {
      const { from, to, start, end } = queueRef.current[i]
      const elapsed = frameRef.current - start
      const progress = elapsed / (end - start)

      if (progress >= 1) {
        output += to
        complete++
      } else {
        const charIndex = Math.floor(Math.random() * CHARS.length)
        output += CHARS[charIndex]
      }
    }

    el.textContent = output

    if (complete === queueRef.current.length) {
      cancelAnimationFrame(frameRequestRef.current!)
      return
    }

    frameRef.current++
    frameRequestRef.current = requestAnimationFrame(update)
  }, [])

  const setText = useCallback(
    (newText: string) => {
      const oldText = elRef.current?.textContent || ""
      const length = Math.max(oldText.length, newText.length)

      queueRef.current = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ""
        const to = newText[i] || ""
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40) + 60
        queueRef.current.push({ from, to, start, end })
      }

      cancelAnimationFrame(frameRequestRef.current!)
      frameRef.current = 0
      frameRequestRef.current = requestAnimationFrame(update)
    },
    [update]
  )

  useEffect(() => {
    let textIndex = 0
    const el = elRef.current
    if (!el) return

    el.textContent = resolvedTexts[0]

    const interval = setInterval(() => {
      textIndex = (textIndex + 1) % resolvedTexts.length
      setText(resolvedTexts[textIndex])
    }, holdDuration + scrambleSpeed * resolvedTexts[0].length)

    return () => clearInterval(interval)
  }, [resolvedTexts, holdDuration, scrambleSpeed, setText])

  return <span ref={elRef} className={className} />
}
