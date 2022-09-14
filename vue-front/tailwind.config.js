/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}','./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  daisyui: {
    styled: true,
    utils: true,
    darkTheme: "cupcake",
    themes: ["cupcake"]
  },
  safelist: [
    'text-space',
  ],
  theme: {
    container: {
      center: true,
      padding: {
          DEFAULT: '3rem',
      }
    },
    colors: {
      'space': '#2C3E4F'
    }
  },
  plugins: [
    require("daisyui"),
    require('tw-elements/dist/plugin')
  ],
}
