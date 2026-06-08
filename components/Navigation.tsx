"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Track active section
      const sections = ["hero", "about", "capabilities", "projects", "contact"]
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const navLinks = [
    { href: "#about", label: "About", activeColor: "neon-purple" },
    { href: "#capabilities", label: "Capabilities", activeColor: "neon-pink" },
    { href: "#projects", label: "Projects", activeColor: "neon-cyan" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cyber-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/5"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {/* Nav border glow when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
      )}

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
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "")
              const isActive = activeSection === sectionId
              const colorMap: Record<string, string> = {
                "neon-purple": "text-neon-purple",
                "neon-pink": "text-neon-pink",
                "neon-cyan": "text-neon-cyan",
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`font-tech text-sm tracking-widest uppercase transition-all duration-300 relative ${
                    isActive ? colorMap[link.activeColor] : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                      style={{
                        background: `linear-gradient(90deg, transparent, var(--tw-${link.activeColor}), transparent)`,
                      }}
                      layoutId="nav-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="px-6 py-2.5 bg-gradient-to-r from-neon-purple to-neon-pink text-white rounded-full text-sm font-cyber font-bold hover:shadow-neon-purple transition-all duration-300 uppercase tracking-wider">
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
        <motion.div
          className={`md:hidden overflow-hidden ${isMobileMenuOpen ? "" : "hidden"}`}
          initial={{ height: 0, opacity: 0 }}
          animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4 pt-4 pb-2 border-t border-purple-500/20 mt-4">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="text-gray-400 hover:text-neon-purple transition-colors font-tech tracking-widest uppercase">About</a>
            <a href="#capabilities" onClick={(e) => handleSmoothScroll(e, "#capabilities")} className="text-gray-400 hover:text-neon-pink transition-colors font-tech tracking-widest uppercase">Capabilities</a>
            <a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")} className="text-gray-400 hover:text-neon-cyan transition-colors font-tech tracking-widest uppercase">Projects</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="text-neon-purple font-cyber uppercase tracking-wider">Connect</a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
