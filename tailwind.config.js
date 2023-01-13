/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {

    textShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  theme: {
    fontFamily: {
      alumni: ["Alumni Sans Collegiate One"],
      ubuntu: ["Ubuntu"],
      alegraya: ["Alegreya Sans SC"],

    },
    extend: {
      boxShadow: {
        '3xl': '0px 1px 10px 0px rgb(255 255 255);',
        'nav': '0px 1px 15px 0px rgb(255 255 255);',
        'nav1': '0px -25px 50px 12px rgb(0 0 0 / 0.25);',
      },
      borderRadius: {
        'logo': '53% 47% 52% 48% / 36% 42% 59% 64%'
      },
      textShadow: {
        'titleday': '-1px 1px 20px rgb(113 134 200)',
        'titledark': '-2px 1px 8px rgb(0 0 0)',
        'white': '-2px 1px 10px rgb(255 255 255)',
        'name': '1px 1px 4px rgb(255 255 255 / 75%);',
        'contact-red': '-2px 1px 8px rgb(200  38 38)',
        'contact-blue': '-2px 1px 8px rgb(37 99 235)',
        'contact-white': '-2px 1px 8px rgb(255 255 255)',
      },
      backgroundImage: {
        'back-page': "url('/src/img/background/background.jpg')"
      },

    }
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require("daisyui"),
  ],
}


