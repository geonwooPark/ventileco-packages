const { colors, zIndex, borderRadius } = require('./theme')

module.exports = {
  theme: {
    extend: {
      colors,
      zIndex,
      borderRadius,
      keyframes: {
        slideFadeIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideFadeOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        slideFadeIn: 'slideFadeIn 0.2s ease',
        slideFadeOut: 'slideFadeOut 0.2s ease',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
