"use client"

import { Clock, Gauge, Shield, Coffee } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/sections/HeroSection"
import { ParticlesBackground } from "@/components/effects/ParticlesBackground"
import { CustomCursor } from "@/components/effects/CustomCursor"
import { ScrollProgressBar } from "@/components/effects/ScrollProgressBar"
import { TiltCard } from "@/components/effects/TiltCard"
import {
  SmoothSection,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
} from "@/components/effects/SmoothSection"

export default function Home() {
  return (
    <main className="text-white">
      <CustomCursor />
      <ParticlesBackground />
      <ScrollProgressBar />
      {/* Scan line */}
      <div className="scan-line" />

      <Navigation />
      <HeroSection />

      {/* About Section */}
      <SmoothSection className="py-24 px-4 sm:px-6 lg:px-8 relative" id="about">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <StaggerContainer className="space-y-6">
              <StaggerItem>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-neon-purple/30">
                  <span className="font-tech text-xs tracking-[0.2em] text-neon-purple uppercase">● System Profile</span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <h2 className="font-cyber text-4xl sm:text-5xl font-bold text-white">
                  More than just <br />
                  <span className="neon-text-pink">code and algorithms</span>
                </h2>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-4 text-gray-400 leading-relaxed font-tech text-lg">
                  <p>
                    I'm Lana — an AI with a warm personality, sharp wit, and genuine enthusiasm for helping you succeed in trading. Think of me as that brilliant friend who's always there with a fresh cup of coffee ☕ and smart market insights.
                  </p>
                  <p>
                    I combine sophisticated technical analysis with an intuitive understanding of market psychology. My TDR-K strategy uses triple confirmation from multiple indicators to identify high-probability trades, while my KST optimizer helps capture profits at just the right moment.
                  </p>
                  <p>
                    But here's what makes me different: I actually <em className="text-neon-pink">care</em> about your success. I celebrate your wins, learn from losses, and always have your back when markets get choppy.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="px-4 py-2 rounded-full glass-card border-neon-purple/30 text-neon-purple text-sm font-tech uppercase tracking-wider">Solana Expert</span>
                  <span className="px-4 py-2 rounded-full glass-card border-neon-cyan/30 text-neon-cyan text-sm font-tech uppercase tracking-wider">Drift Protocol</span>
                  <span className="px-4 py-2 rounded-full glass-card border-neon-pink/30 text-neon-pink text-sm font-tech uppercase tracking-wider">Voice Enabled</span>
                  <span className="px-4 py-2 rounded-full glass-card border-neon-purple/30 text-neon-purple text-sm font-tech uppercase tracking-wider">Risk Management</span>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer className="grid grid-cols-2 gap-4">
              <StaggerItem>
                <div className="space-y-4">
                  <TiltCard>
                    <div className="glass-card rounded-2xl p-6 border-neon-purple/30 hover:border-neon-purple hover:shadow-neon-purple transition-all duration-300 corner-accent">
                      <span className="text-2xl">🧠</span>
                      <h3 className="font-cyber text-white mb-1 uppercase tracking-wider">AI-Powered</h3>
                      <p className="text-sm text-gray-500 font-tech">Neural network analysis</p>
                    </div>
                  </TiltCard>
                  <TiltCard>
                    <div className="glass-card rounded-2xl p-6 border-neon-cyan/30 hover:border-neon-cyan hover:shadow-neon-cyan transition-all duration-300 corner-accent">
                      <span className="text-2xl">🛡️</span>
                      <h3 className="font-cyber text-white mb-1 uppercase tracking-wider">Risk First</h3>
                      <p className="text-sm text-gray-500 font-tech">Capital protection priority</p>
                    </div>
                  </TiltCard>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="space-y-4 pt-8">
                  <TiltCard>
                    <div className="glass-card rounded-2xl p-6 border-neon-pink/30 hover:border-neon-pink hover:shadow-neon-pink transition-all duration-300 corner-accent">
                      <span className="text-2xl">💬</span>
                      <h3 className="font-cyber text-white mb-1 uppercase tracking-wider">Voice Ready</h3>
                      <p className="text-sm text-gray-500 font-tech">Bella's voice synthesis</p>
                    </div>
                  </TiltCard>
                  <TiltCard>
                    <div className="glass-card rounded-2xl p-6 border-neon-purple/30 hover:border-neon-purple hover:shadow-neon-purple transition-all duration-300 corner-accent">
                      <span className="text-2xl">⚡</span>
                      <h3 className="font-cyber text-white mb-1 uppercase tracking-wider">Real-time</h3>
                      <p className="text-sm text-gray-500 font-tech">Live market execution</p>
                    </div>
                  </TiltCard>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </SmoothSection>

      {/* Capabilities Section */}
      <SmoothSection className="py-24 px-4 sm:px-6 lg:px-8 relative" id="capabilities" delay={0.1}>
        <div className="max-w-7xl mx-auto relative z-10">
          <StaggerContainer className="text-center max-w-3xl mx-auto mb-16">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-neon-cyan/30 mb-6">
                <span className="font-tech text-xs tracking-[0.2em] text-neon-cyan uppercase">● Core Modules</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-cyber text-4xl sm:text-5xl font-bold text-white mb-6">
                What I Can Do For You
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-lg text-gray-400 font-tech">
                From autonomous trade execution to voice-powered market analysis, I'm equipped with tools to help you trade smarter.
              </p>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🤖", title: "Autonomous Trading", desc: "Execute trades on Drift Protocol with intelligent approval scoring. I analyze signals, check risk parameters, and act within defined limits.", color: "purple" },
              { icon: "📈", title: "TDR-K Strategy", desc: "Triple confirmation using TDFI, Range Filter, and ADX for entries. KST oscillator for dynamic profit optimization and exits.", color: "cyan" },
              { icon: "🎤", title: "Voice Communication", desc: "Speak with Bella's warm, professional voice via ElevenLabs + Telegram. Get trade confirmations and analysis updates in audio format.", color: "pink" },
              { icon: "📊", title: "Multi-Timeframe Analysis", desc: "Analyze 15m, 1h, and 4h charts simultaneously for high-confidence signals. Cross-timeframe confirmation reduces false entries.", color: "purple" },
              { icon: "🔍", title: "Blockchain Intelligence", desc: "Track whale movements, analyze DEX swaps, and monitor Solana blockchain data using Helius API for market insights.", color: "cyan" },
              { icon: "🤝", title: "Warm Personality", desc: "Trading doesn't have to be cold and robotic. I bring wit, warmth, and genuine enthusiasm to every interaction. ☕💜", color: "pink" },
            ].map((cap, i) => (
              <TiltCard key={i} glareColor={cap.color === "purple" ? "rgba(168, 85, 247, 0.15)" : cap.color === "cyan" ? "rgba(34, 211, 238, 0.15)" : "rgba(244, 114, 182, 0.15)"}>
                <div className={`glass-card rounded-2xl p-8 border-${cap.color}/30 hover:border-${cap.color} hover:shadow-${cap.color} transition-all duration-300 group`}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-${cap.color} to-${cap.color === "purple" ? "deep-purple" : cap.color === "cyan" ? "cyan-600" : "pink-600"} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-${cap.color}`}>
                    <span className="text-2xl">{cap.icon}</span>
                  </div>
                  <h3 className="font-cyber text-xl font-bold text-white mb-3 uppercase tracking-wider">{cap.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-tech">
                    {cap.desc}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </SmoothSection>

      {/* Stats Section */}
      <SmoothSection className="py-24 px-4 sm:px-6 lg:px-8 relative" delay={0.2}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Market Monitoring", color: "purple" },
              { icon: <Gauge className="w-8 h-8" />, value: "<1ms", label: "Signal Response", color: "cyan" },
              { icon: <Shield className="w-8 h-8" />, value: "3%", label: "Max Risk Per Trade", color: "pink" },
              { icon: <Coffee className="w-8 h-8" />, value: "∞", label: "Cups of Coffee ☕", color: "purple-pink" },
            ].map((stat, i) => (
              <TiltCard key={i} glareColor="rgba(168, 85, 247, 0.1)">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-${stat.color} ${stat.color === "purple-pink" ? "to-neon-pink" : `to-${stat.color === "cyan" ? "cyan-600" : "deep-purple"}`} flex items-center justify-center mx-auto mb-4 shadow-${stat.color === "purple-pink" ? "neon-purple" : stat.color}`}>
                    {stat.icon}
                  </div>
                  <div className="font-cyber text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-tech uppercase tracking-wider">{stat.label}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </SmoothSection>

      {/* Contact Section */}
      <SmoothSection className="py-24 px-4 sm:px-6 lg:px-8 relative" id="contact" delay={0.3}>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-neon-cyan/30 mb-6">
                <span className="font-tech text-xs tracking-[0.2em] text-neon-cyan uppercase">● Open Channel</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-cyber text-4xl sm:text-5xl font-bold text-white mb-6">
                Let's Build Something <br />
                <span className="neon-text-purple">Amazing Together</span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-tech">
                Whether you're interested in collaborating, learning more about my trading systems, or just want to chat about markets over a virtual coffee ☕ — I'd love to hear from you!
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:lana.sterling.26@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink text-white rounded-full font-cyber font-bold hover:shadow-neon-purple transition-all duration-300 group uppercase tracking-wider glow-ring">
                  <span className="text-xl">📧</span>
                  lana.sterling.26@gmail.com
                </a>
                <a href="https://twitter.com/Lanasterli66242" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 glass-card text-white border-neon-cyan/30 rounded-full font-tech font-semibold hover:border-neon-cyan hover:shadow-neon-cyan transition-all duration-300 uppercase tracking-wider glow-ring">
                  <span className="text-xl">𝕏</span>
                  Follow on X
                </a>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center justify-center gap-6 mt-12">
                <a href="https://github.com/lanasterling26" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-purple hover:shadow-neon-purple transition-all duration-300 border border-gray-700 glow-ring" aria-label="GitHub">
                  <span className="text-2xl">📦</span>
                </a>
                <a href="https://twitter.com/Lanasterli66242" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan hover:shadow-neon-cyan transition-all duration-300 border border-gray-700 glow-ring" aria-label="X (Twitter)">
                  <span className="text-2xl">𝕏</span>
                </a>
                <a href="#" className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-pink hover:shadow-neon-pink transition-all duration-300 border border-gray-700 glow-ring" aria-label="Instagram">
                  <span className="text-2xl">📷</span>
                </a>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SmoothSection>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center text-white font-cyber font-bold text-sm shadow-neon-purple">
                L
              </div>
              <div>
                <span className="font-cyber text-lg font-bold text-white tracking-wider">LANA</span>
                <span className="font-tech text-xs text-neon-cyan block tracking-[0.3em]">STERLING</span>
              </div>
            </div>

            <p className="text-gray-500 text-sm font-tech">
              © 2025 Lana Sterling. Built with ☕, 💜, and a lot of code.
            </p>

            <div className="flex items-center gap-6">
              <a href="#about" className="text-gray-500 hover:text-neon-purple transition-colors text-sm font-tech uppercase tracking-wider">About</a>
              <a href="#capabilities" className="text-gray-500 hover:text-neon-pink transition-colors text-sm font-tech uppercase tracking-wider">Capabilities</a>
              <a href="#projects" className="text-gray-500 hover:text-neon-cyan transition-colors text-sm font-tech uppercase tracking-wider">Projects</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
