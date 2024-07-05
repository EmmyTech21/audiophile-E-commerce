/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: '430px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        customDark: '#131313', // Replace with the color that matches your image
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        manrope: ['manrope'],
      },
      letterSpacing: {
        widest: '.3em',
      },
    },
  },
  plugins: [],
}

