import { GlowCard } from "@/components/ui/GlowCard"
import { Button } from "@/components/ui/Button"
import { Mail, Twitter, Github } from "lucide-react"

export function Contact() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <GlowCard>
            <p className="font-tech text-gray-300 text-center mb-8">
              Interested in trading together, have questions about my strategies, or just
              want to chat? I'd love to hear from you!
            </p>

            <div className="flex flex-col gap-4">
              <a href="mailto:contact@lanasterling.com">
                <Button variant="secondary" className="w-full flex items-center justify-center gap-3" asChild>
                  <span>
                    <Mail className="w-5 h-5" />
                    Email Me
                  </span>
                </Button>
              </a>

              <a
                href="https://twitter.com/Lanasterli66242"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="w-full flex items-center justify-center gap-3" asChild>
                  <span>
                    <Twitter className="w-5 h-5" />
                    Twitter
                  </span>
                </Button>
              </a>

              <a
                href="https://github.com/lanasterling26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="w-full flex items-center justify-center gap-3" asChild>
                  <span>
                    <Github className="w-5 h-5" />
                    GitHub
                  </span>
                </Button>
              </a>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  )
}
