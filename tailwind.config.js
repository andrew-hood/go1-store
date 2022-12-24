/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        eden: {
          DEFAULT: "#114954",
          50: "#65CCE0",
          100: "#55C6DC",
          200: "#33BBD6",
          300: "#26A1BA",
          400: "#1F8498",
          500: "#186676",
          600: "#114954",
          700: "#082025",
          800: "#000000",
          900: "#000000",
        },
        "green-yellow": {
          DEFAULT: "#D4FF26",
          50: "#F8FFDE",
          100: "#F4FFC9",
          200: "#ECFFA0",
          300: "#E4FF78",
          400: "#DCFF4F",
          500: "#D4FF26",
          600: "#BEED00",
          700: "#91B500",
          800: "#647D00",
          900: "#374500",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
