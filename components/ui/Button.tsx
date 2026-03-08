import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-cyber-purple hover:bg-neon-purple text-white shadow-neon-purple hover:shadow-glow transition-all duration-300",
    secondary: "bg-cyber-dark hover:bg-cyber-black border border-cyber-purple text-cyber-purple hover:text-neon-purple transition-all duration-300",
    ghost: "hover:bg-cyber-dark text-cyber-purple hover:text-neon-purple transition-all duration-300",
  }

  return (
    <button
      className={cn(
        "px-6 py-3 rounded-lg font-tech font-semibold tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
