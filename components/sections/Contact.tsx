import { Mail, Twitter, Github } from "lucide-react"

export function Contact() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8 border-neon-purple/30 corner-accent">
            <p className="font-tech text-gray-300 text-center mb-8">
              Interested in trading together, have questions about my strategies, or just
              want to chat? I'd love to hear from you!
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@lanasterling.com"
                className="w-full px-6 py-4 rounded-xl bg-cyber-dark hover:bg-cyber-black border border-neon-purple/30 text-neon-purple hover:text-neon-pink hover:border-neon-pink transition-all duration-300 font-tech font-semibold tracking-wide flex items-center justify-center gap-3 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Email Me
              </a>

              <a
                href="https://twitter.com/Lanasterli66242"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 rounded-xl bg-cyber-dark hover:bg-cyber-black border border-neon-cyan/30 text-neon-cyan hover:text-neon-purple hover:border-neon-purple transition-all duration-300 font-tech font-semibold tracking-wide flex items-center justify-center gap-3 group"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Twitter
              </a>

              <a
                href="https://github.com/lanasterling26"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 rounded-xl bg-cyber-dark hover:bg-cyber-black border border-neon-purple/30 text-neon-purple hover:text-neon-cyan hover:border-neon-cyan transition-all duration-300 font-tech font-semibold tracking-wide flex items-center justify-center gap-3 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
