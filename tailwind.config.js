/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        universe_primary: '#EE6F15',
        universe_secendary: '#004CAD',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

