/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#8DA47E',
          light: '#E1E4D8',
          dark: '#5C6B50',
        },
        charcoal: {
          DEFAULT: '#333333',
          light: '#666666',
        },
        cream: {
          DEFAULT: '#FAFAF7',
          off: '#F0EFE8',
        },
        gold: '#C9B26A',
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
