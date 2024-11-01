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
        'button': '#02285B',
        'hover': '#2b62a5',
        'focus': '#F8F9FE'
      },
      borderColor: {
        'focus': '#8883B6',
      },
      textColor: {
        'button': '#02285B',
        'purple': '#8b87b5',
      }
    },
  },
  plugins: [],
}