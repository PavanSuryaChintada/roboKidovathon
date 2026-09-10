import { type Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'robo-navy': '#0A1930',
        'robo-navy-light': '#0F2A4D',
        'robo-blue': '#006AA7',
        'robo-blue-hover': '#013A63',
        'robo-volt': '#FFCD00',
        'robo-volt-light': '#FFE066',
        'robo-gray': '#F2F6FA',
        'robo-slate': '#55677C',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Outfit', 'Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        handwriting: ['Caveat', 'Kalam', 'cursive'],
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
