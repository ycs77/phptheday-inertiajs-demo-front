const tinycolor = require('tinycolor2')
const rgba = (value, alpha) => tinycolor(value).setAlpha(alpha).toRgbString()

module.exports = {
  purge: [
    './src/**/*.blade.php',
    './src/**/*.vue'
  ],
  theme: {
    extend: {},
    customForms: theme => ({
      default: {
        'input, checkbox': {
          borderColor: theme('colors.purple.300'),
          '&:focus': {
            boxShadow: `0 0 0 3px ${rgba(theme('colors.purple.500'), 0.5)}`,
            borderColor: theme('colors.purple.400')
          }
        },
        checkbox: {
          color: theme('colors.purple.500')
        }
      }
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
}
