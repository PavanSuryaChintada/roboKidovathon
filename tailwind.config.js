/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slush-dark': '#0B0B0E',
        'slush-darker': '#050507',
        'slush-card': '#13131A',
        'neon-magenta': '#FF0055',
        'neon-volt': '#E2FF00',
        'neon-cyan': '#00F2FE',
        paper: '#0B0B0E',
        ink: '#FFFFFF',
        'yellow-pop': '#E2FF00',
        'blue-pop': '#00F2FE',
        'red-pop': '#FF0055',
        'slate-tint': '#13131A',
        'ink-black': '#FFFFFF',
        'retro-red': '#FF0055',
        'retro-orange': '#FF0055',
        'retro-yellow': '#E2FF00',
        'retro-teal': '#00F2FE',
        'retro-purple': '#7928CA',
        'retro-green': '#00E676',
        brand: {
          blue: '#00F2FE',
          'blue-hover': '#00c4ce',
          amber: '#E2FF00',
          cyan: '#00F2FE',
          emerald: '#00E676',
          slate: {
            900: '#0B0B0E',
            800: '#13131A',
            700: '#1E1E26',
            600: '#2A2A36',
            500: '#64748B',
            200: '#E2E8F0',
            100: '#F1F5F9',
            50: '#0B0B0E',
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
        'glow-magenta': '0 0 25px rgba(255, 0, 85, 0.4)',
        'glow-volt': '0 0 25px rgba(226, 255, 0, 0.4)',
        'glow-cyan': '0 0 25px rgba(0, 242, 254, 0.4)',
        'brutal': '5px 5px 0px #FF0055',
        'brutal-lg': '7px 7px 0px #FF0055',
        'brutal-sm': '3px 3px 0px #FF0055',
        'brutal-yellow': '5px 5px 0px #E2FF00',
        'brutal-blue': '5px 5px 0px #00F2FE',
        'brutal-red': '5px 5px 0px #FF0055',
      }
    },
  },
  plugins: [],
}
