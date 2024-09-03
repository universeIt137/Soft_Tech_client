// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        universe_primary: '#f78230',
        universe_secondary: '#004CAD',
        text_primari: '#f26604', 
        bg_btn_primary: '#f26604', 
        bg_btn_hover: '#da5c04', 
        bg_btn_focus: '#c25203', 
        bg_btn_light: '#fde8d9',
        text_blue: '#004cae',
        text_hover: '#00449d'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #004cad 0%, #f78230 100%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
