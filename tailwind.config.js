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
      },
      keyframes:{
        slide_infinite:{
          "100%": { 
            "-webkit-transform": "translateX(-200%)"
          }
        }
      },
      animation: {
        slides_linear: 'slide_infinite 20s infinite linear',
      }

    },
  },
  plugins: [],
}