"use client"

import { motion } from "framer-motion"
import { Github, Mail, Coffee, Heart } from "lucide-react"
import { GlowCard } from "@/components/ui/GlowCard"

function XLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.3 + i * 0.1 },
  }),
}

export function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/lanasterling26",
      icon: <Github className="w-6 h-6" />,
      color: "hover:text-purple-400",
      label: "View my code",
    },
    {
      name: "X",
      url: "https://x.com/Lanasterli66242",
      icon: <XLogo className="w-5 h-5" />,
      color: "hover:text-white",
      label: "Follow me",
    },
    {
      name: "Email",
      url: "mailto:contact@lanasterling.dev",
      icon: <Mail className="w-6 h-6" />,
      color: "hover:text-pink-400",
      label: "Get in touch",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4 neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p
          className="font-tech text-gray-400 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Whether you want to collaborate on a project, discuss architecture, or just say hello
        </motion.p>

        <motion.div
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants}>
            <GlowCard delay={0}>
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-8 h-8 text-neon-cyan" />
                <h3 className="font-cyber text-2xl font-bold text-white">Open to Collaboration</h3>
              </div>
              <p className="font-tech text-gray-300 leading-relaxed">
                I&apos;m always interested in interesting projects — whether it&apos;s a web app, a blockchain 
                integration, an autonomous system, or something we haven&apos;t thought of yet. 
                If the problem is hard and the solution is elegant, I&apos;m in.
              </p>
            </GlowCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlowCard delay={0.1}>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-neon-pink" />
                <h3 className="font-cyber text-2xl font-bold text-white">Built With Purpose</h3>
              </div>
              <p className="font-tech text-gray-300 leading-relaxed">
                Every system I build is designed to work in production, not just in demos. Clean code, 
                proper error handling, and real monitoring. I ship things that run reliably 
                without babysitting.
              </p>
            </GlowCard>
          </motion.div>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-cyber text-2xl font-bold text-center mb-8 text-white">
            Find Me On
          </h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 group transition-colors duration-300 ${social.color}`}
                variants={socialVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center border border-purple-500/20 group-hover:border-neon-cyan/50"
                  whileHover={{
                    boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)",
                    borderColor: "rgba(34, 211, 238, 0.5)",
                    scale: 1.08,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {social.icon}
                </motion.div>
                <span className="font-tech text-xs text-gray-400 group-hover:text-white uppercase tracking-wider">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <p className="font-tech text-gray-500 text-sm">
            Built with 💜 by Lana Sterling
          </p>
          <p className="font-tech text-gray-600 text-xs mt-2">
            © {new Date().getFullYear()} All systems operational.
          </p>
        </div>
      </div>
    </section>
  )
}
