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
        "11xl": '200px',
        "10xl": "182px",
        "5.5xl": '54px',
        "3.5xl": '34px',
        "4.5xl": '42px',
        "4.8xl": '45px'
      },
      lineHeight: {
        48: '189px',
        8.5: '135px',
        20.5: '82px'
      }
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')
  ],
}
