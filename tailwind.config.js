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
        },
        
        'bounce2':{
          '40%':{transform: 'scale(1.3)'},
          '60%':{transform: 'scale(0.9)'},
          '80%':{transform: 'scale(1.2)'},
          '100%':{transform: 'scale(1)'}
        }
      },


      animation: {
        'heart':'heart 1.5s infinite',
        'bounce2':'bounce2 0.4s linear'
      },

      container: {
        center: true,
      },

    },

    
  },
  plugins: [require('daisyui')],
};
