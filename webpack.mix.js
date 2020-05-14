const mix = require('laravel-mix')

mix.postCss('src/app.css', 'dist/css/tailwindcss.css', [
  require('postcss-import'),
  require('tailwindcss')
])
