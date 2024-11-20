/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C5DFA",
        "primary-light": "#9277FF",
        dark: "#1E2139",
        darker: "#141625",
        "gray-custom": "#888EB0",
        "light-gray": "#DFE3FA",
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
