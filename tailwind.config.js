module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'lexend': ['Lexend Exa', 'sans-serif'],
        'handjet': ['Handjet', 'sans-serif'],
        'rubik': ['Rubik Mono One', 'sans-serif'],
        'archivo': ['Archivo Black', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
    },
    dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    }
  },
  plugins: [
      require('flowbite/plugin')
  ],
}