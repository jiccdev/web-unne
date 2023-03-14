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
      container: {
        center: true,
        // padding: {
        //   DEFAULT: '1rem',
        //   xl: '40px',
        //   '2xl': '128px',
        // },
      },
    },
  },
  plugins: [require('daisyui')],
};
