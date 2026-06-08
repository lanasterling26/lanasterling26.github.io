import { projects } from "@/lib/data"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id}>
              <div className="glass-card rounded-2xl p-8 border-neon-purple/30 hover:border-neon-cyan/50 transition-all duration-300 corner-accent h-full flex flex-col">
                <h3 className="font-cyber text-xl font-bold mb-3 neon-text-pink">
                  {project.title}
                </h3>
                <p className="font-tech text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyber-dark border border-neon-purple/30 rounded-full text-xs font-tech text-neon-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 rounded-lg bg-cyber-dark hover:bg-cyber-black border border-neon-purple/30 text-neon-purple hover:text-white hover:border-neon-purple transition-all duration-300 font-tech font-semibold text-sm flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-neon-purple to-neon-pink text-white font-cyber font-bold text-sm hover:shadow-neon-purple transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
