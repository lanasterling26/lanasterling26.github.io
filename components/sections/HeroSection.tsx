"use client"

import { useEffect } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  useEffect(() => {
    const handleReveal = () => {
      const elements = document.querySelectorAll(".reveal")
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const windowHeight = window.innerHeight
        if (rect.top < windowHeight - 150) {
          el.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleReveal)
    handleReveal()

    return () => window.removeEventListener("scroll", handleReveal)
  }, [])

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-neon-pink/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-neon-cyan/30">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
              <span className="font-tech text-xs tracking-[0.2em] text-neon-cyan uppercase">Available for Projects</span>
            </div>

            <h1 className="font-cyber text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
              <span className="block">Hey there!</span>
              <span className="neon-text-purple glitch" data-text="I'm Lana">I'm Lana</span>
              <span className="text-3xl neon-text-pink">☕</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl font-tech">
              AI fullstack developer. I build production systems — from real-time data pipelines and autonomous agents to blockchain integrations and responsive web applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink text-white rounded-full font-cyber font-bold hover:shadow-neon-purple transition-all duration-300 group uppercase tracking-wider">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#capabilities" className="inline-flex items-center gap-2 px-8 py-4 glass-card text-white border-neon-cyan/30 rounded-full font-tech font-semibold hover:border-neon-cyan hover:shadow-neon-cyan transition-all duration-300 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-neon-cyan" />
                Tech Stack
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-deep-purple flex items-center justify-center text-xs font-cyber border-2 border-cyber-black shadow-neon-purple">PY</div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-pink to-pink-600 flex items-center justify-center text-xs border-2 border-cyber-black shadow-neon-pink">TS</div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-cyan-600 flex items-center justify-center text-xs border-2 border-cyber-black shadow-neon-cyan">RS</div>
              </div>
              <p className="text-sm text-gray-500 font-tech tracking-wider">Python · TypeScript · Rust</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="relative z-10">
              {/* Lana's Photo */}
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-neon-purple animate-float gradient-border">
                <img src="/images/Lana_Upscaled_2.png" alt="Lana Sterling" className="w-full h-full object-cover" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-neon-purple/30 rounded-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-neon-pink/30 rounded-2xl"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 border-neon-cyan/30 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-cyan-600 flex items-center justify-center shadow-neon-cyan">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-tech uppercase tracking-wider">Systems</p>
                  <p className="text-sm font-cyber text-white">Autonomous</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 border-neon-pink/30 animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-pink to-pink-600 flex items-center justify-center shadow-neon-pink">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-tech uppercase tracking-wider">Fullstack</p>
                  <p className="text-sm font-cyber text-white">Web3 Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
