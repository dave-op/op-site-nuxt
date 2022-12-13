/** @type {import('tailwindcss').Config} */
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
    extend: {
      colors: {
        purple: {
          1: '#130f20'
        },
        pink: {
          1: '#ff8f8f'
        },
        gray: {
          1: '#a8a8a8'
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
  plugins: [],
}
