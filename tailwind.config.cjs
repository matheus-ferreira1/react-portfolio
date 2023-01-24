/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "gray-1": "#111111",
        "gray-2": "#141414",
      },
    },
  },
  plugins: [],
};
