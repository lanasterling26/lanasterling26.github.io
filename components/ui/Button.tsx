import React from "react"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", asChild = false, ...props }, ref) => {
    const variants = {
      primary: "bg-cyber-purple hover:bg-neon-purple text-white shadow-neon-purple hover:shadow-glow transition-all duration-300",
      secondary: "bg-cyber-dark hover:bg-cyber-black border border-cyber-purple text-cyber-purple hover:text-neon-purple transition-all duration-300",
      ghost: "hover:bg-cyber-dark text-cyber-purple hover:text-neon-purple transition-all duration-300",
    }

    if (asChild && "children" in props) {
      const { children: child, ...rest } = props as { children: React.ReactElement }
      return React.cloneElement(child, {
        className: cn(
          "px-6 py-3 rounded-lg font-tech font-semibold tracking-wide",
          variants[variant],
          className,
          child.props.className
        ),
        ref,
        ...rest,
      })
    }

    return (
      <button
        className={cn(
          "px-6 py-3 rounded-lg font-tech font-semibold tracking-wide",
          variants[variant],
          className
        )}
        {...props}
        ref={ref}
      />
    )
  }
)

Button.displayName = "Button"
