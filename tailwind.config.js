/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        progress: "progress 3s linear",
      },
      keyframes: {
        progress: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
    },
  },
  plugins: [],
};
