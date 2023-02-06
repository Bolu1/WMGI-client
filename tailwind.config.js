const colors = require("tailwindcss/colors");


module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      teal: "#13361c",
      ash: "#212717",
      gold: "#cc9a48",
      lash: "#dfdfdf"
    },
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
};