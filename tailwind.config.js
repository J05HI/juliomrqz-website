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
    darkSelector: '.dark-mode',
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
        400: colors.blue['400'],
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
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-active',
    ],
    borderColor: [
      'responsive',
      'hover',
      'focus',
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-active',
    ],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-active',
    ],
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss-filters'),
    require('tailwindcss-dark-mode')(),
  ],
  purge: false,
}
