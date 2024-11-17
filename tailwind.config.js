/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: ['#FAE3B6'],
        btnColor: ['#FFD687'],
        counterBg: ['#FEECC8'],
        productBg: ['#CFA485'],
        starColor: ['#FFAF37'],
        priceColor: ['#C4C4C4'],
      },
      fontFamily: {
        poppins: ['Poppins'],
        frank: ['Frank Ruhl Libre'],
        podkova: ['Podkova']
      },
      dropShadow: {
        shyam: '0 2px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
