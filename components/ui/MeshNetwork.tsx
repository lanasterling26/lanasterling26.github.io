"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

export function MeshNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animFrameId: number
    let nodes: Node[] = []
    let dataPackets: { from: number; to: number; t: number; speed: number }[] = []
    let hasAnimatedIn = false

    const resize = () => {
      canvas!.width = canvas!.offsetWidth * window.devicePixelRatio
      canvas!.height = canvas!.offsetHeight * window.devicePixelRatio
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const initNodes = () => {
      const w = canvas!.offsetWidth
      const h = canvas!.offsetHeight
      const count = Math.min(28, Math.floor((w * h) / 25000))

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        connections: [],
      }))

      // Build connections based on distance
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 180 && Math.random() < 0.4) {
            nodes[i].connections.push(j)
            nodes[j].connections.push(i)
          }
        }
      }
    }

    const spawnPacket = () => {
      if (nodes.length < 2) return
      const from = Math.floor(Math.random() * nodes.length)
      const conns = nodes[from].connections
      if (conns.length === 0) return
      const to = conns[Math.floor(Math.random() * conns.length)]
      dataPackets.push({
        from,
        to,
        t: 0,
        speed: 0.008 + Math.random() * 0.006,
      })
    }

    let packetTimer = 0

    const draw = (time: number) => {
      const w = canvas!.offsetWidth
      const h = canvas!.offsetHeight

      ctx!.clearRect(0, 0, w, h)

      // Update node positions
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > w) node.vx *= -1
        if (node.y < 0 || node.y > h) node.vy *= -1
      }

      // Draw connections
      const alpha = hasAnimatedIn ? 1 : Math.min(1, time / 2000)

      for (const node of nodes) {
        for (const connIdx of node.connections) {
          const other = nodes[connIdx]
          if (!other) continue
          const dx = node.x - other.x
          const dy = node.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > 200) continue

          const lineAlpha = Math.max(0, 1 - dist / 200) * 0.15 * alpha
          ctx!.beginPath()
          ctx!.moveTo(node.x, node.y)
          ctx!.lineTo(other.x, other.y)
          ctx!.strokeStyle = `rgba(212, 165, 116, ${lineAlpha})`
          ctx!.lineWidth = 0.5
          ctx!.stroke()
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const nodeAlpha = 0.3 * alpha
        ctx!.beginPath()
        ctx!.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(212, 165, 116, ${nodeAlpha})`
        ctx!.fill()
      }

      // Update and draw data packets
      packetTimer++
      if (packetTimer % 80 === 0) spawnPacket()

      dataPackets = dataPackets.filter((pkt) => pkt.t < 1)
      for (const pkt of dataPackets) {
        pkt.t += pkt.speed
        const fromNode = nodes[pkt.from]
        const toNode = nodes[pkt.to]
        if (!fromNode || !toNode) continue

        const x = fromNode.x + (toNode.x - fromNode.x) * pkt.t
        const y = fromNode.y + (toNode.y - fromNode.y) * pkt.t
        const pktAlpha = (1 - Math.abs(pkt.t - 0.5) * 2) * 0.6 * alpha

        ctx!.beginPath()
        ctx!.arc(x, y, 1.5, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(212, 165, 116, ${pktAlpha})`
        ctx!.fill()

        // Glow trace
        ctx!.beginPath()
        ctx!.arc(x, y, 3, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(212, 165, 116, ${pktAlpha * 0.2})`
        ctx!.fill()
      }

      if (!hasAnimatedIn && alpha >= 1) {
        hasAnimatedIn = true
      }

      animFrameId = requestAnimationFrame(draw)
    }

    resize()
    initNodes()
    animFrameId = requestAnimationFrame(draw)

    window.addEventListener("resize", () => {
      resize()
      initNodes()
    })

    return () => {
      cancelAnimationFrame(animFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  )
}
