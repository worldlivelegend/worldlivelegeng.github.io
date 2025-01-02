/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      },

      screens: {
        xs: '0px',
        sm: '350px',
        md: '640px',
        lg: '970px',
    },
    },
  },
  plugins: [],
}

