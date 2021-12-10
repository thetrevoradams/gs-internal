const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Biryani', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          lighter: '#F9FBFF',
          light: '#F4F9FF',
          table: '#EBF2FF',
          DEFAULT: '#1485FA',
        },
        gray: {
          light: '#DEE9FF',
          DEFAULT: '#A0AFC3',
        },
        heading: {
          light: '#627B9A',
          DEFAULT: '#1E436E',
        },
      },
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      DEFAULT: '0px 4px 8px rgba(183, 218, 255, 0.3)',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even'],
    },
  },
  plugins: [],
}
