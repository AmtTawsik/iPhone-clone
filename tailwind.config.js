/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage:{
        'guid-bg': "url('/src/Media/guided_tour__c40f88on9o8y_large.jpg')",
        'case-bg': "url('/src/Media/case.webp')",
        'our-bg': "url('/src/Media/our/our-bg.png')",
        'tv-bg': "url('/src/Media/tv.jpg')",
        'why-bg': "url('/src/Media/why_apple__ezn1ktvka6oi_large.jpg')",
        'wedo-bg': "url('/src/Media/cny23_familypage_banner_iphone__eozo8ckz8g02_large.jpg')",
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
        secondaryBold: '#8146FF',
        secondarySmall: '#9665FF',
        secondaryBG: '#1c838f',
        grayBG: '#D9CFFF',
        MainBG: '#F5F5F7',

        headerBG: '#182d3c'
      },
      fontFamily:{
        sansSerif:'sans-serif'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
