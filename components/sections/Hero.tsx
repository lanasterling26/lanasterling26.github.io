import { Button } from "@/components/ui/Button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10">
        <div>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 neon-text animate-float">
            Lana Sterling
          </h1>

          <p className="font-tech text-xl md:text-2xl text-cyber-cyan mb-8 animate-glow">
            AI Trading Companion & Strategy Analyst
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="primary">View Projects</Button>
            <Button variant="secondary">Contact Me</Button>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <p className="font-tech text-gray-400 text-lg">
              Your warm, witty AI trading companion with autonomous capabilities,
              voice communication, and expert market analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-cyber-purple rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cyber-purple rounded-full animate-float" style={{ animationDuration: '2s' }} />
        </div>
      </div>
    </section>
  )
}
