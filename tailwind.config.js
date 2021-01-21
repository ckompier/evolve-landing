const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      acento: '#2EC4B6',
    },
    boxShadow: {
      DEFAULT:
        '6px 6px 10px 0 rgba(0, 0, 0, 0.1),-6px -6px 10px 0 rgba(255, 255, 255, 0.5);',
      inner:
        '-8px -8px 8px 0 rgba(255,255,255,0.7), 8px 8px 8px 0 rgba(174,174,192,0.2);',
    },
    extend: {
      fontFamily: {
        sans: ['Arial'],
        logo: ['BIOWEAPON'],
      },
      backgroundImage: (theme) => ({
        hero: "url('/rss.jpg')",
      }),
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
