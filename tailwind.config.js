/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      colors: {
        primary: "#4f46e5",
        indigo: {
          500: "#6366f1"
        }
      }
    }
  },
  plugins: []
};
