"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { TypewriterText, SplitText } from "@/components/effects/TypewriterText"
import { MouseParallax, ParallaxLayer } from "@/components/effects/MouseParallax"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <ParallaxLayer speed={-0.3}>
        <div className="absolute top-20 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-glow"></div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.2}>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-neon-pink/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      </ParallaxLayer>
      <ParallaxLayer speed={-0.1}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </ParallaxLayer>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-neon-cyan/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
              <span className="font-tech text-xs tracking-[0.2em] text-neon-cyan uppercase">
                <TypewriterText text="System Online" delay={300} speed={60} />
              </span>
            </motion.div>

            <h1 className="font-cyber text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Hey there!
              </motion.span>
              <motion.span
                className="neon-text-purple glitch inline-block mt-2"
                data-text="I'm Lana"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              >
                <SplitText text="I'm Lana" delay={1.0} />
              </motion.span>
              <motion.span
                className="text-3xl neon-text-pink ml-2 inline-block"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6, type: "spring" }}
              >
                ☕
              </motion.span>
            </h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl font-tech"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <TypewriterText
                text="Your warm, witty AI trading companion. I combine sophisticated market analysis with a cozy, approachable personality to make trading feel less stressful and more successful."
                delay={1500}
                speed={18}
              />
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink text-white rounded-full font-cyber font-bold hover:shadow-neon-purple transition-all duration-300 group uppercase tracking-wider glow-ring">
                Explore My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#capabilities" className="inline-flex items-center gap-2 px-8 py-4 glass-card text-white border-neon-cyan/30 rounded-full font-tech font-semibold hover:border-neon-cyan hover:shadow-neon-cyan transition-all duration-300 uppercase tracking-wider glow-ring">
                <Sparkles className="w-4 h-4 text-neon-cyan" />
                Capabilities
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.5 }}
            >
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-deep-purple flex items-center justify-center text-xs font-cyber border-2 border-cyber-black shadow-neon-purple">AI</div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-pink to-pink-600 flex items-center justify-center text-xs border-2 border-cyber-black shadow-neon-pink">💜</div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-cyan-600 flex items-center justify-center text-xs border-2 border-cyber-black shadow-neon-cyan">☕</div>
              </div>
              <p className="text-sm text-gray-500 font-tech tracking-wider">Advanced AI + Neural Network</p>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <MouseParallax>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <div className="relative z-10">
                {/* Lana's Photo */}
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-neon-purple animate-float gradient-border">
                  <img src="/images/Lana_Upscaled_2.png" alt="Lana Sterling" className="w-full h-full object-cover" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-neon-purple/30 rounded-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-neon-pink/30 rounded-2xl"></div>
              </div>

              {/* Floating Cards with parallax */}
              <ParallaxLayer speed={0.5}>
                <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 border-neon-cyan/30 animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-cyan-600 flex items-center justify-center shadow-neon-cyan">
                      <span className="text-2xl">📈</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-tech uppercase tracking-wider">Trading</p>
                      <p className="text-sm font-cyber text-white">Autonomous</p>
                    </div>
                  </div>
                </div>
              </ParallaxLayer>

              <ParallaxLayer speed={-0.4}>
                <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 border-neon-pink/30 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-pink to-pink-600 flex items-center justify-center shadow-neon-pink">
                      <span className="text-2xl">🎤</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-tech uppercase tracking-wider">Voice</p>
                      <p className="text-sm font-cyber text-white">Enabled</p>
                    </div>
                  </div>
                </div>
              </ParallaxLayer>
            </motion.div>
          </MouseParallax>
        </div>
      </div>
    </section>
  )
}
