import type { Metadata } from "next"
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-fraunces",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
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
        className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <div className="warm-ambient" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
