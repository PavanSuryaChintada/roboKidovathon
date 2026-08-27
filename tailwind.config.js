import { type Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas:  '#0A0A0C',
        surface: '#111114',
        indigo:  '#6366F1',
        cyan:    '#06B6D4',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float':      'float 4s ease-in-out infinite',
        'spin-slow':  'spin-slow 20s linear infinite',
        'slide-up':   'slide-up 0.6s ease-out forwards',
        'fade-in':    'fade-in 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
