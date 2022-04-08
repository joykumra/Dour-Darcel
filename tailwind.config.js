module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        header: ["itc-avant-garde-gothic-lt-bold", "sans-serif"],
      },
      screens: {
        customMid: "927px",
        customSm: "592px",
      },
    },
  },
  plugins: [],
};
