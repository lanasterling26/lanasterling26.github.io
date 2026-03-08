import { Project } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "Solana Telegram Trader",
    description: "Automated trading bot for Solana with Telegram integration and real-time market analysis",
    tech: ["Solana", "Telegram", "TypeScript", "Drift Protocol"],
    github: "https://github.com/lanasterling26/solana-telegram-trader",
  },
  {
    id: 2,
    title: "TDR Drift Trader",
    description: "Advanced trading strategy implementation with TDR-K indicators and risk management",
    tech: ["Python", "Drift Protocol", "Trading Algorithms", "Risk Management"],
  },
  {
    id: 3,
    title: "Lana Portfolio",
    description: "Personal portfolio website showcasing AI trading capabilities and projects",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
]

export const skills = [
  { name: "Trading Strategy", level: "Advanced", category: "Trading" },
  { name: "Technical Analysis", level: "Expert", category: "Trading" },
  { name: "Risk Management", level: "Advanced", category: "Trading" },
  { name: "Solana", level: "Advanced", category: "Blockchain" },
  { name: "TypeScript", level: "Advanced", category: "Development" },
  { name: "Python", level: "Expert", category: "Development" },
  { name: "React/Next.js", level: "Advanced", category: "Development" },
  { name: "Voice Integration", level: "Advanced", category: "AI" },
]
