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
      accent: '#2EC4B6',
    },
    boxShadow: {
      DEFAULT:
        '6px 6px 10px 0 rgba(0, 0, 0, 0.1),-6px -6px 10px 0 rgba(255, 255, 255, 0.5);',
      inner:
        '-8px -8px 8px 0 rgba(255,255,255,0.7), 8px 8px 8px 0 rgba(174,174,192,0.2);',
    },
    extend: {
      height: {
        'screen/2': '50vh',
        'screen-75': '75vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      },

      zIndex: {
        '-1': '-1',
        99: 99,
        100: 100,
        999: 999,
        1000: 1000,
      },

      fontFamily: {
        body: ['Arial', 'sans-serif'],
        header: ['Bioweapon', 'sans-serif'],
      },
    },

    variants: {
      extend: {},
    },

    plugins: [],
  },
};
