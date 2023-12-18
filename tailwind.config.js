/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*/*.html',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/component/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple-start': 'var(--bg-dark-purple-start)',
        'dark-purple-end': 'var(--bg-dark-purple-end)',
      },
      width: {
        '19/20': '95%',
      },
      minHeight: {
        '24': '6rem',
      }
    },
  },
  plugins: [],
}

