/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'},
    },
    container: {
      padding: '20px',
      center: true,
    },
    extend: {
      colors: {
        primary: '#0d6efd',
        secondary: '#6c757d',
        success: '#198754',
        danger: '#dc3545',
        warning: '#ffc107'
      },
      fontFamily: {
        "Konit": ["'Kanit', 'sans-serif'"],
        "Quicksand": ["'Quicksand', 'sans-serif'"],
        "Raleway": ["'Raleway', 'sans-serif'"],
      },
    },
  },
  plugins: [],
}
