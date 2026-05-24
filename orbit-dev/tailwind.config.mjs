/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],

  theme: {
    extend: {

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      colors: {

        brand: {
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
        },

        dark: {
          900: '#09090B',
          800: '#111113',
          700: '#18181B',
        }

      }

    },
  },

  plugins: [],
};