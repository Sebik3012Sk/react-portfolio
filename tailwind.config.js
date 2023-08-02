/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        myclr : {
          "100" : "red",
          "200" : "orange",
          "900" : "pink"
        }
      }
    },
  },
  plugins: [],
}