/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        'pop' : ['Poppins', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif']
      }

    },
  },
  plugins: [],
}

