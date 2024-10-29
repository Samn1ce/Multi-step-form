/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        "1": '1px'
      },
      backgroundColor: {
        'main': '#EEF5FF',
        'button': '#174A8A',
        'hover': '#2b62a5',
        'focus': '#8883B6'
      }
    },
  },
  plugins: [],
}