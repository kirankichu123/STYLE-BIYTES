/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#EAF7EE', // Light green background
          700: '#2F855A', // Deep green for text
          800: '#276749', // Darker green for accents
        },
        yellow: {
          600: '#D4AF37', // Gold accent
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        head:['Merriweather','serif']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}