
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Mistrully', 'sans-serif'],
        custom2: ['LeagueSpartan', 'sans-serif']
        
      },
      screens: {
        '3xl': '1920px'
      }
    },
    
  },
  plugins: [],
}