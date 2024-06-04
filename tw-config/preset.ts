const { colors, zIndex, borderRadius } = require('./theme')

module.exports = {
  theme: {
    extend: {
      colors,
      zIndex,
      borderRadius,
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
