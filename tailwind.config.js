/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C96A',
          dark: '#9A7A2E',
          shine: '#F5D97A',
        },
        black: {
          DEFAULT: '#0A0A0A',
          soft: '#141414',
          card: '#1A1A1A',
          border: '#2A2A2A',
        },
        offwhite: '#F5F0E8',
        cream: {
          DEFAULT: '#F5F0E8',
          off: '#EDE8DC',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Helvetica Neue', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
    },
  },
  plugins: [],
}
