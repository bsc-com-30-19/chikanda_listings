/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'p_cyan'    : '#09B5EC',
        'p_teal'    : '#278DAD',
        'p_snow'    : '#FFFAFC',
        'p_colu_d'  : '#B8C7D1',
        'p_colu'    : '#CEDBE0',
        'p_lave'    : '#F5EDF0',
        'p_purp_d'  : '#210124',
        'p_blue_d'  : '#105798'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

