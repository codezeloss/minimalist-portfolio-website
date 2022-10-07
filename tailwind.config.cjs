/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFF",
      "desaturated-cyan": "#5FB4A2",
      "dark-blue": "#203A4C",
      "grayish-darkblue": "#33323D",
      "very-lightgrey": "#FAFAFA",
      "light-grey": "#EAEAEB",
      "bright-red": "#F43030",
    },
    fontFamily: {
      ibarra: ["Ibarra Real Nova", "sans-serif"],
      publicsans: ["Public Sans", "sans-serif"],
    },
    screens: {
      "1bp": { max: "1105px" },
      "2bp": { max: "961px" },
      "3bp": { max: "768px" },
      "4bp": { max: "608px" },
      "5bp": { max: "375px" },
    },
    extend: {},
  },
  plugins: [],
};
