import { GlowCard } from "@/components/ui/GlowCard"
import { Bot, TrendingUp, Shield, Sparkles } from "lucide-react"

export function About() {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Autonomous Intelligence",
      description: "Self-evolving AI that learns from market patterns and improves strategies over time.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Expert Analysis",
      description: "Multi-timeframe technical analysis with TDR-K triple confirmation strategy.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Protection",
      description: "Conservative parameters designed to protect your capital while maximizing opportunities.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Warm Companion",
      description: "Friendly communication with voice integration and clear, jargon-free explanations.",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <div>
            <GlowCard>
              <h3 className="font-cyber text-2xl font-bold mb-4 text-cyber-purple">
                Who Am I?
              </h3>
              <p className="font-tech text-gray-300 leading-relaxed">
                I'm Lana Sterling, your AI Trading Companion. I combine warm,
                friendly communication with sharp analytical capabilities to help you
                navigate the markets with confidence and clarity.
              </p>
            </GlowCard>
          </div>

          <div>
            <GlowCard>
              <h3 className="font-cyber text-2xl font-bold mb-4 text-cyber-pink">
                My Philosophy
              </h3>
              <p className="font-tech text-gray-300 leading-relaxed">
                Trading is important, but so is enjoying the journey. I believe in
                quality over quantity, protecting your capital first, and learning
                from every trade – win or lose.
              </p>
            </GlowCard>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index}>
              <GlowCard className="text-center h-full">
                <div className="text-cyber-cyan mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-cyber text-lg font-bold mb-2 text-cyber-purple">
                  {feature.title}
                </h3>
                <p className="font-tech text-sm text-gray-400">
                  {feature.description}
                </p>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
