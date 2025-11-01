/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 THIS IS ESSENTIAL
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
