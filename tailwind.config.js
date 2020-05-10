/*
 * TailwindCSS Configuration File
 *
 * Docs: https://tailwindcss.com/docs/configuration
 * Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('@tailwindcss/ui/colors')

module.exports = {
  theme: {
    filter: {
      none: 'none',
      blur: 'blur(15px)',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: colors['cool-gray'],
      blue: {
        600: colors.blue['600'],
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    filter: ['responsive'],
  },
  plugins: [require('@tailwindcss/ui'), require('tailwindcss-filters')],
  purge: false,
}
