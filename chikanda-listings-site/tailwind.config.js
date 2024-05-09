/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'p_cyan' : '#24CBFF'
      },

      /* backgroundImage:{
        welcome : "url('./src/assets/img/pexels-olly-3c769021.png')"
      } */
    },
  },
  plugins: [],
}

