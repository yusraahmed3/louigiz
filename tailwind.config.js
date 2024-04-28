/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Mistrully', 'sans-serif'],
        custom2: ['LeagueSpartan', 'sans-serif']
        
      },
    },
  },
  plugins: [],
}