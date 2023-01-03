/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#edeee9",
        "gray-50": "#c2c5b5",
        "gray-100": "#c6e573",
        "gray-500": "#093002",
        "primary-100": "#E0F2D7",
        "primary-300": "#7c921d",
        "primary-500": "#83a700",
        "secondary-400": "#b3d232",
        "secondary-500": "#83a700",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        blurredlogo: "url('./assets/BlurredLogo.png')",
      },
      boxShadow: {
        'cardshadow': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
        'cardshadowhover': "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}