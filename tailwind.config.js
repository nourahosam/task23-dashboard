/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container:{
        center: true,
        padding: '7rem'
      }
    },
  },
  plugins: [],
}
