/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'offwhite': '#FAFAFA',
        'dark-slate': '#0F172A',
        'card-slate': '#1E293B',
        'electric-blue': '#0052FF',
        'volt-yellow': '#E2FF00',
        'red-pop': '#FF3B00',
        'muted-slate': '#64748B',
        paper: '#FAFAFA',
        ink: '#0F172A',
        'yellow-pop': '#E2FF00',
        'blue-pop': '#0052FF',
        'slate-tint': '#F1F5F9',
        'ink-black': '#0F172A',
        brand: {
          blue: '#0052FF',
          'blue-hover': '#003ecc',
          amber: '#FACC15',
          cyan: '#0284C7',
          emerald: '#059669',
          slate: {
            900: '#0F172A',
            800: '#1E293B',
            700: '#334155',
            600: '#475569',
            500: '#64748B',
            200: '#E2E8F0',
            100: '#F1F5F9',
            50: '#FAFAFA',
          }
        }
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        syne: ['Plus Jakarta Sans', 'sans-serif'],
        space: ['Plus Jakarta Sans', 'sans-serif'],
        barlow: ['Plus Jakarta Sans', 'sans-serif'],
        dmsans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
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
