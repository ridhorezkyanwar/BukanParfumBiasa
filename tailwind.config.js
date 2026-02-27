/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background': '#EFEBE9',
        'primary': '#5D4037',
        'primary-dark': '#4E342E',
        'accent': '#8D6E63',
      },
    },
  },
  plugins: [],
}
