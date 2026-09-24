/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },

      colors: {
        "wexora-blue": "#124B87",
        primary: "#1F63A5",
        light: "#EAF3FA",
        orange: "#F5A400",
        navy: "#0B2D4D",
        gray: "#475569",
        soft: "#F5F7FA",
      },
    },
  },

  plugins: [],
};