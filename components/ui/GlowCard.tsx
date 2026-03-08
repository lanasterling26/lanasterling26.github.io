import { cn } from "@/lib/utils"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-xl p-6 hover:shadow-glow transition-all duration-500",
        className
      )}
    >
      {children}
    </div>
  )
}
