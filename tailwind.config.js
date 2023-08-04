/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        home_bg:"url(/backgrounds/home_bg.png)"
      },
      fontFamily:{
        mutant: "Mutant Academy BB" // custom font use
      }
    },
  },
  plugins: [],
}