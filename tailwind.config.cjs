/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fff5f8",
          100: "#ffe6ef",
          200: "#ffc2d7",
          300: "#ff9bbf",
          400: "#ff6aa0",
          500: "#ff3f86",
          600: "#f11f6d",
          700: "#c81457",
          800: "#a1134a",
          900: "#82133f",
        },
        lavender: {
          50: "#f7f5ff",
          100: "#eee9ff",
          200: "#d9d0ff",
          300: "#c0b3ff",
          400: "#a089ff",
          500: "#865eff",
          600: "#7438ff",
          700: "#5f22ec",
          800: "#4f1cc2",
          900: "#421b9b",
        },
        mint: {
          50: "#f1fffb",
          100: "#dbfff4",
          200: "#b2ffe7",
          300: "#82ffd7",
          400: "#42ffc2",
          500: "#17f2ad",
          600: "#00c98e",
          700: "#019e71",
          800: "#067c5a",
          900: "#06654b",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,.35), 0 18px 40px -18px rgba(255, 63, 134, .45)",
        glowDark:
          "0 0 0 1px rgba(255,255,255,.10), 0 18px 45px -20px rgba(134, 94, 255, .45)",
      },
    },
  },
  plugins: [],
};