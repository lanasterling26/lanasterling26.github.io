"use client"

import { useState } from "react"
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-nord-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* LANA Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-warm-amber to-accent-amber flex items-center justify-center text-nord-bg text-xl font-bold shadow-glow-amber group-hover:shadow-glow-amber transition-all duration-500">
              L
            </div>
            <div>
              <span className="font-display text-xl font-bold text-nord-text tracking-wider">LANA</span>
              <span className="font-tech text-xs text-warm-amber block tracking-[0.3em] uppercase">STERLING</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="font-tech text-sm tracking-widest text-nord-muted hover:text-warm-amber transition-colors duration-300 uppercase"
            >
              About
            </a>
            <a
              href="#capabilities"
              className="font-tech text-sm tracking-widest text-nord-muted hover:text-warm-amber transition-colors duration-300 uppercase"
            >
              Capabilities
            </a>
            <a
              href="#projects"
              className="font-tech text-sm tracking-widest text-nord-muted hover:text-warm-amber transition-colors duration-300 uppercase"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-warm-amber to-accent-amber text-nord-bg rounded-full text-sm font-tech font-bold hover:shadow-glow-amber transition-all duration-300 uppercase tracking-wider"
            >
              Connect
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-warm-amber hover:text-accent-amber transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-nord-border mt-4">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className="text-nord-muted hover:text-warm-amber transition-colors font-tech tracking-widest uppercase text-sm"
            >
              About
            </a>
            <a
              href="#capabilities"
              onClick={(e) => handleSmoothScroll(e, "#capabilities")}
              className="text-nord-muted hover:text-warm-amber transition-colors font-tech tracking-widest uppercase text-sm"
            >
              Capabilities
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
              className="text-nord-muted hover:text-warm-amber transition-colors font-tech tracking-widest uppercase text-sm"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="text-warm-amber font-tech uppercase tracking-wider text-sm font-bold"
            >
              Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
