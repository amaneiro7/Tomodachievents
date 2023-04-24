/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'bg-main-color': '#151946',
        'bg-secondary-color': '#4FE5EF',
        'bg-terciary-color': '#F945BC',
        'text-color-main': '#99296F',
        'text-color-secondary': '#4FE5EF',
        'text-color-terciary': '#F945BC',
        'text-color-blanco': '#FBDBFA'
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/background1.jpg')"
      },
      backgroundColor: {
        'bg-opacity': 'rgba(0,0,0,0.4)'
      }
    },
    fontFamily: {
      sans: ['system-ui', 'ui-sans-serif']
    }
  },
  plugins: []
}
