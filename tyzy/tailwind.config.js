/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'titleColor':'#4BA695',
        'titleOrange':'#F26052'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}
