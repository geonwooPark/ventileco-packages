/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require('./tw-config/preset')],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
