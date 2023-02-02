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
      backgroundImage: {
        'hero-pattern': "url('https://img1.akspic.ru/crops/4/2/6/5/6/165624/165624-tumannost-astronomiya-tumannost_oriona-vual_tumannost-ostatok_sverhnovoj-1920x1080.jpg')",
      },
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
