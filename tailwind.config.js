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
      keyframes: {
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-x': 'gradientX 10s ease infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
