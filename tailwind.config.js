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
    },
    colors: {
      blue: {
        lighter: '#F9FBFF',
        light: '#F4F9FF',
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
  variants: {
    extend: {},
  },
  plugins: [],
}
