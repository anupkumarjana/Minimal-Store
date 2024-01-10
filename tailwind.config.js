/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Blinker: ['"Blinker"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
