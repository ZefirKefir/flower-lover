/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#040A0A',
        teal: '#43FFD2',
        disabled: '#515151',
        pink: {
          800: '#7D2253',
          300: '#D978AC',
        },
        gray: {
          800: '#8A8686',
        },
        blue: {
          800: '#163D8F',
        },
      },
      screens: {
        xs: '420px',
        s: '480px',
        ll: '1100px',
      },
      fontFamily: {
        cormorant: ['Cormorant', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
        fancy: ['Simpletune', 'cursive'],
        roboto: ['Roboto Condensed', 'sans-serif'],
      },
      backgroundImage: {
        header: "url('/src/assets/bg-main.jpg')",
        popular: "url('/src/assets/bg-popular.jpg')",
      },
      boxShadow: {
        inner: 'inset 0 0 10px #1B000E',
      },
      animation: {
        'bubble-left-slow': 'bubbleLeft 6s linear infinite',
        'bubble-right-slow': 'bubbleRight 7s linear infinite',
        'leftsided': 'bubbleThird 5s linear infinite',
      },
      keyframes: {
        bubbleLeft: {
          '0%, 100%': { transform: 'translate(0,0) rotate(30deg) scale(1)' },
          '33%': { transform: 'translate(60px, 50px) rotate(30deg) scale(1.1)' },
          '66%': { transform: 'translate(80px, -45px) rotate(35deg) scale(1.05)' },
        },
        bubbleRight: {
          '0%, 100%': { transform: 'translate(0,0) rotate(30deg) scale(1.1)' },
          '33%': { transform: 'translate(-10px, -20px) rotate(40deg) scale(0.95)' },
          '66%': { transform: 'translate(20px, 25px) rotate(35deg) scale(1.15)' },
        },
        bubbleThird: {
          '0%, 100%': { transform: 'translate(0,0) rotate(-43deg) scale(1)' },
          '33%': { transform: 'translate(50px, -50px) rotate(-52deg) scale(1.2)' },
          '66%': { transform: 'translate(30px, 5px) rotate(-47deg) scale(1.2)' },
        }
      },
    },
    plugins: [],
  }
}