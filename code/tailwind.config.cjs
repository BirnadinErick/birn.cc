/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        'syne': ['Syne', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'mono'],
      },
      colors: {
        'green': '#99EDCC',
        'purple': '#D2B7E5',
        'dark-gray': '#151417',
        'light-gray': '#1E1E1E',
      }
    }
  },
  plugins: []
};
