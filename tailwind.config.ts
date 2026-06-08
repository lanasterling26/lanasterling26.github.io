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
        // Nordic Minimalist palette — warm, muted, sophisticated
        'nord-bg': '#0f0f13',
        'nord-surface': '#16161e',
        'nord-elevated': '#1c1c28',
        'nord-border': '#2a2a3a',
        'nord-text': '#e8e6e3',
        'nord-muted': '#8b8a91',
        'nord-dim': '#5a5963',
        // Nord numbered scale (50–900) for backward compat
        'nord': {
          50: '#ececec',
          100: '#d5d4da',
          200: '#b3b2ba',
          300: '#8b8a91',
          400: '#6b6a73',
          500: '#5a5963',
          600: '#464652',
          700: '#2a2a3a',
          800: '#1c1c28',
          900: '#16161e',
          950: '#0f0f13',
        },
        // Warm accent trio
        'warm-amber': '#d4a574',
        'warm-rose': '#c98a9b',
        'warm-ice': '#7ab8c9',
        // Deepened accent tones for strong contrast
        'accent-amber': '#c9975e',
        'accent-rose': '#bf7a8e',
        'accent-ice': '#63a9bb',
      },
      fontFamily: {
        'display': ['Fraunces', 'Georgia', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'tech': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0, 0, 0, 0.3)',
        'soft-lg': '0 4px 40px rgba(0, 0, 0, 0.4)',
        'glow-amber': '0 0 20px rgba(212, 165, 116, 0.2), 0 0 40px rgba(212, 165, 116, 0.1)',
        'glow-rose': '0 0 20px rgba(201, 138, 155, 0.2), 0 0 40px rgba(201, 138, 155, 0.1)',
        'glow-ice': '0 0 20px rgba(122, 184, 201, 0.2), 0 0 40px rgba(122, 184, 201, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-warm': 'pulseWarm 3s ease-in-out infinite',
        'data-flow': 'dataFlow 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseWarm: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.9' },
        },
        dataFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
