import { GlowCard } from "@/components/ui/GlowCard"
import { skills } from "@/lib/data"

export function Skills() {
  const categories = Array.from(new Set(skills.map(s => s.category)))

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, catIndex) => (
            <div key={category}>
              <GlowCard>
                <h3 className="font-cyber text-xl font-bold mb-6 text-cyber-cyan">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="font-tech text-gray-300">
                            {skill.name}
                          </span>
                          <span className="font-tech text-cyber-purple font-semibold">
                            {skill.level}
                          </span>
                        </div>
                        <div className="w-full bg-cyber-dark rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-cyber-purple to-neon-purple h-2 rounded-full animate-glow"
                            style={{
                              width: skill.level === "Expert" ? "95%" : skill.level === "Advanced" ? "80%" : "65%",
                              animationDelay: `${catIndex * 0.2 + index * 0.1}s`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
