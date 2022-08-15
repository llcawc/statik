// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{html,htm,njk,md,js}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
