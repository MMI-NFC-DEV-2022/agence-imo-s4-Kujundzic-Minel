/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Noirs et blancs
        blanc: "#ffffff",
        blancbody : "#fbfbfb",
      },

      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      boxShadow: {
        'drop2': '0 10px 48px rgba(30, 28, 46, 0.08)',
        'drop-shadow' : '0px 24px 48px rgba(30, 28, 46, 0.08)',
      }
    },
  },
  plugins: [],
};