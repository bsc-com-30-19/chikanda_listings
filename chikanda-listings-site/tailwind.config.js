/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'p_cyan'    : '#24CBFF',
        'p_teal'    : '#278DAD',
        'p_snow'    : '#FFFAFC',
        'p_colu_d'  : '#B8C7D1',
        'p_colu'    : '#CEDBE0',
        'p_lave'    : '#F5EDF0',
        'p_purp_d'  : '#210124'
      },

      /* backgroundImage:{
        welcome : "url('./src/assets/img/pexels-olly-3c769021.png')"
      } */
    },
  },
  plugins: [],
}

