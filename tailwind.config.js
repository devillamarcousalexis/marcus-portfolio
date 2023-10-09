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
  },
  plugins: [
      require('flowbite/plugin')
  ],
}