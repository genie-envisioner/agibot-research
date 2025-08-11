/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          300: '#53a9de',
          400: '#3d7fb2',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'float': 'float 20s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '33%': {
            transform: 'translateY(-10px) rotate(1deg)',
          },
          '66%': {
            transform: 'translateY(-5px) rotate(-1deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
