const mix = require('laravel-mix')

mix.postCss('src/app.css', 'src/tailwindcss.css', [
  require('postcss-import'),
  require('tailwindcss'),
  require('autoprefixer')
])
