/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0B0F19',
        'navy-card': '#161E2E',
        'electric-blue': '#0052FF',
        'neon-yellow': '#E2FF00',
        'offwhite': '#FAFAFA',
        'dark-slate': '#0B0F19',
        'card-slate': '#161E2E',
        'red-pop': '#FF3B00',
        'muted-slate': '#94A3B8',
        paper: '#0B0F19',
        ink: '#FFFFFF',
        'yellow-pop': '#E2FF00',
        'blue-pop': '#0052FF',
        'slate-tint': '#161E2E',
        'ink-black': '#FFFFFF',
        brand: {
          blue: '#0052FF',
          'blue-hover': '#003ecc',
          amber: '#E2FF00',
          cyan: '#0284C7',
          emerald: '#059669',
          slate: {
            900: '#0B0F19',
            800: '#161E2E',
            700: '#334155',
            600: '#475569',
            500: '#64748B',
            200: '#E2E8F0',
            100: '#F1F5F9',
            50: '#0B0F19',
          }
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
        display: ['Inter', 'Manrope', 'sans-serif'],
        syne: ['Inter', 'sans-serif'],
        space: ['Inter', 'sans-serif'],
        jakarta: ['Inter', 'sans-serif'],
        barlow: ['Inter', 'sans-serif'],
        dmsans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'event-card': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'event-hover': '0 20px 30px -10px rgba(15, 23, 42, 0.1)',
        'glow-blue': '0 0 25px rgba(0, 82, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
