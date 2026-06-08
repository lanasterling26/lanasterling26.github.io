import type { Metadata } from "next"
import { Inter, Orbitron, Rajdhani, Syncopate } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
})
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
})
const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
})

export const metadata: Metadata = {
  title: "Lana Sterling | AI Fullstack Developer",
  description: "Lana Sterling - AI fullstack developer building production systems across web, blockchain, and autonomous agents. Python, TypeScript, Rust, Solana.",
  keywords: ["AI developer", "fullstack", "blockchain", "Solana", "Python", "TypeScript", "Rust", "autonomous systems"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} ${orbitron.variable} ${rajdhani.variable} ${syncopate.variable} antialiased`}
      >
        <div className="city-lights" />
        <div className="scanlines relative z-10">{children}</div>
      </body>
    </html>
  )
}
