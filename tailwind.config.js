/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
    extend: {
      fontFamily: {
        'kumbh': ['Kumbh Sans', 'sans-serif', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        purple: {
          1: '#130f20'
        },
        pink: {
          1: '#ff8f8f'
        },
        gray: {
          1: '#a8a8a8',
          2: '#1f1a2f',
          3: '#ebebeb',
          4: '#acacac',
          5: '#888888'
        }
      },
      fontSize: {
        "11xl": '12.5rem',
        "10xl": "11.375rem",
        "5.5xl": '3.375rem',
        "3.5xl": '2.125rem',
        "4.5xl": '2.625rem',
        "4.8xl": '2.8125rem'
      },
      lineHeight: {
        48: '189px',
        8.5: '135px',
        20.5: '82px'
      },
      width: {
        150: '150%',
      },
      height: {
        400: '400%',
      }
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')
  ],
}
