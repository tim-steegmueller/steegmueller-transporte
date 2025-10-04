/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app/**/*.vue',
    './app.vue',
    './error.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2faf8',
          100: '#d9f1ea',
          200: '#b6e4d6',
          300: '#8ad3bf',
          400: '#5ec2a9',
          500: '#38ad92',
          600: '#2b8d77',
          700: '#237060',
          800: '#1c574a',
          900: '#123a32'
        },
        midnight: {
          900: '#0f1720',
          800: '#16212b',
          700: '#1d2c36'
        },
        neutral: {
          50: '#f7f9fb',
          100: '#edf1f5',
          200: '#d9e0e7',
          300: '#c1cad4',
          400: '#99a6b0',
          500: '#738290',
          600: '#5c6974',
          700: '#455059',
          800: '#2f373f',
          900: '#1f252a'
        }
      },
      boxShadow: {
        soft: '0 15px 40px -20px rgba(12, 78, 66, 0.35)',
        card: '0 18px 50px -22px rgba(15, 23, 42, 0.45)'
      },
      backgroundImage: {
        'subtle-grid':
          'radial-gradient(circle at 1px 1px, rgba(17, 24, 39, 0.08) 1px, transparent 0)',
        'hero-gradient':
          'linear-gradient(135deg, rgba(56, 173, 146, 0.15) 0%, rgba(15, 23, 32, 0.4) 100%)'
      }
    }
  },
  plugins: []
}
