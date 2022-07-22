/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'titleColor':'#4BA695',
        'titleOrange':'#F26052',
        'pGreen':'#426666',
        'textGray':'#6C6C6C',
        'bgBlanco':'#FDFDFD',
        'verdeOsc':'#426666',
        'verdeMasClaro':'#A9D3CB'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}
