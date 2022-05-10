module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        mainYellow: {
          800: '#FFBF00',
          500: '#ffe302'
        },
        brandColor:{
          100:'#FFFAF1',
          200:'#DCE9E2',
          500: '#00856F',
        },
        secondaryColor:{
          500:'#495057',
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar'),],
}
