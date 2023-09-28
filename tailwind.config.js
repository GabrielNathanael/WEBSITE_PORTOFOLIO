/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','contact.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#eab308',
        dark: '#0f172a',
        secondary:'#334155',
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}

