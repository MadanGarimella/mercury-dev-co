/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e", // Green (main brand)
        primaryDark: "#16a34a",
        dark: "#000000",
        light: "#ffffff",
        grayDark: "#0f0f0f",
        border: "#1f1f1f",
        muted: "#9ca3af",
      },
    },
  },
  plugins: [],
  fontFamily: {
    sans: ["Inter", "sans-serif"],
  },
};
