/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F7F4EC',
        ink: '#111111',
        'yellow-pop': '#FACC15',
        'blue-pop': '#0052FF',
        'red-pop': '#FF3B00',
        'slate-tint': '#d9e2e6',
        'ink-black': '#111111',
        'retro-red': '#FF3B00',
        'retro-orange': '#FF3B00',
        'retro-yellow': '#FACC15',
        'retro-teal': '#0052FF',
        'retro-purple': '#3b3789',
        'retro-green': '#059669',
        brand: {
          blue: '#0052FF',
          'blue-hover': '#003ecc',
          amber: '#FACC15',
          cyan: '#0284C7',
          emerald: '#059669',
          slate: {
            900: '#111111',
            800: '#1E293B',
            700: '#334155',
            600: '#475569',
            500: '#64748B',
            200: '#E2E8F0',
            100: '#F1F5F9',
            50: '#F7F4EC',
          }
        }
      },
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
        archivo: ['Archivo Black', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '5px 5px 0px #111111',
        'brutal-lg': '7px 7px 0px #111111',
        'brutal-sm': '3px 3px 0px #111111',
        'brutal-yellow': '5px 5px 0px #FACC15',
        'brutal-blue': '5px 5px 0px #0052FF',
        'brutal-red': '5px 5px 0px #FF3B00',
      }
    },
  },
  plugins: [],
}
