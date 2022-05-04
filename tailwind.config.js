module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        mainYellow: {
          800: '#FFBF00',
          500: '#ffe302'
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar'),],
}
