/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        Rubik: "'Rubik', sans-serif"
      },
      fontWeight:{
        400: 400,
        500: 500,
        700: 700,
      },
      backgroundImage:{
        'bg-mobile': "url('../src/assets/images/pattern-bg-mobile.png')",
        'bg-desktop': "url('../src/assets/images/pattern-bg-desktop.png')",
      },
      animation:{
        rotate: 'rotate 1s linear infinite',
        rotateBack: 'rotate 0.5s linear infinite'
      },
      keyframes:{
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        rotateBack: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        }
      }
    },
  },
  plugins: [],
}

