import { type Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'robo-navy': '#07111F',
        'robo-navy-light': '#0D1B2E',
        'robo-blue': '#0052FF',
        'robo-blue-hover': '#0043D6',
        'robo-volt': '#E2FF00',
        'robo-volt-light': '#F0FF66',
        'robo-gray': '#F5F2EE',
        'robo-slate': '#4A5568',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Outfit', 'Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
