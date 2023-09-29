/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      primary:'poppins',
    },
    container:{
      padding:{
        DEFAULT:'30px',
        lg:'0',
      },
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl:'1440px',
    },
    extend: {
      colors:{
        primary:'',
        secondary:'',
      },
      backgroundImage:{
        hero: 'url()',
      },
    },
  },
  plugins: [],
};