/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //custome font, colors,
      fontFamily: {
        Roboto: ['Roboto']
      }
    },
  },
  plugins: [],
}
