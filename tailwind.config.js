/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        spacing: {
            '280': '277.5px', 
            '27': '105.5px'
          },
    },
  },
  plugins: [],
}

