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
      },
      colors: {
        bg: {
          DEFAULT: '#000000',
          youtube: '#FF0000',
          twitter: '#00acee',
          facebook: '#3b5998',
        }
      },
    },
  },
  plugins: [],
}
