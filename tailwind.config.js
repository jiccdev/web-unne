/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'heart':{
          '0%':{transform: 'none'},
          '50%':{transform: 'scale(1.04)'},
          '100%':{transform: 'none'}
        }
      },
      animation: {
        'heart':'heart 1.5s infinite'
      },
      container: {
        center: true,
      },

    },
  },
  plugins: [require('daisyui')],
};
