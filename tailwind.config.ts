import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0f',
        'cyber-dark': '#12121a',
        'cyber-purple': '#8b5cf6',
        'cyber-pink': '#ec4899',
        'cyber-cyan': '#06b6d4',
        'cyber-yellow': '#fbbf24',
        'neon-purple': '#a855f7',
        'neon-pink': '#f472b6',
        'neon-cyan': '#22d3ee',
        'deep-purple': '#4c1d95',
        'midnight': '#1e1b4b',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'sans-serif'],
        'tech': ['Rajdhani', 'sans-serif'],
        'display': ['Syncopate', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)',
        'neon-cyan': '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)',
        'glow': '0 0 60px -15px rgba(139, 92, 246, 0.4)',
      },
      animation: {
        'scanlines': 'scanlines 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'data-flow': 'data-flow 4s linear infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'border-run': 'border-run 3s linear infinite',
      },
      keyframes: {
        scanlines: {
          '0%, 100%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
        glow: {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'data-flow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
        'border-run': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
