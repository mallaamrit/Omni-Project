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
      },
      colors:{

        skynetblue: '#16A1EB',
        skynetsecondaryblue: '#9EB2CC',
        background: '#CCF0EA',


        gray:{
          150: '#9EB2CC',
        },
       
      }
    },
  },
  plugins: [],
}

