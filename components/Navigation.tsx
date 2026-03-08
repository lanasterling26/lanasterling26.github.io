"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center text-white font-cyber text-xl font-bold shadow-neon-purple group-hover:shadow-neon-pink transition-all duration-500">
              L
            </div>
            <div>
              <span className="font-cyber text-xl font-bold text-white tracking-wider">LANA</span>
              <span className="font-tech text-xs text-neon-cyan block tracking-[0.3em]">STERLING</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="font-tech text-sm tracking-widest text-gray-400 hover:text-neon-purple transition-colors duration-300 uppercase">About</a>
            <a href="#capabilities" className="font-tech text-sm tracking-widest text-gray-400 hover:text-neon-pink transition-colors duration-300 uppercase">Capabilities</a>
            <a href="#projects" className="font-tech text-sm tracking-widest text-gray-400 hover:text-neon-cyan transition-colors duration-300 uppercase">Projects</a>
            <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-neon-purple to-neon-pink text-white rounded-full text-sm font-cyber font-bold hover:shadow-neon-purple transition-all duration-300 uppercase tracking-wider">
              Connect
            </a>
          </div>

          <button
            className="md:hidden p-2 text-neon-purple"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden px-6 pb-4 border-t border-purple-500/20 ${isMobileMenuOpen ? "" : "hidden"}`}>
          <div className="flex flex-col gap-4 pt-4">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="text-gray-400 hover:text-neon-purple transition-colors font-tech tracking-widest uppercase">About</a>
            <a href="#capabilities" onClick={(e) => handleSmoothScroll(e, "#capabilities")} className="text-gray-400 hover:text-neon-pink transition-colors font-tech tracking-widest uppercase">Capabilities</a>
            <a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")} className="text-gray-400 hover:text-neon-cyan transition-colors font-tech tracking-widest uppercase">Projects</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="text-neon-purple font-cyber uppercase tracking-wider">Connect</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
