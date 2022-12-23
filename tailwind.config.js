/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        button: "var(--color-bg-button)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
