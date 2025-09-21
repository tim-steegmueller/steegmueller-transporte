/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app/**/*.vue",
    "./app.vue",
    "./error.vue"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#d1fae5',
          400: '#34d399',
          500: '#2fae8b',
          600: '#1f8a6e',
          900: '#064e3b'
        },
        gray: {
          900: '#333333',
          850: '#1f2937',
          700: '#667085',
          100: '#f5f5f5'
        }
      }
    },
  },
  plugins: [],
}