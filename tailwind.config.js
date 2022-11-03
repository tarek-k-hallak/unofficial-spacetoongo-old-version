/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Tajawal',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        // lg: '3rem',
      },
    },
    screens: {
      xs: '410px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#d32e30',
        accent: '#ed5a2a',
        hover: {
          1: '#ff540d',
          2: '#ffd97a',
        },
        background: '#f4f3ef',
      },
      dropShadow: {
        primary: '0px 4px 10px rgba(15, 27, 51, 0.05);',
      },
    },
  },
  plugins: [],
};
