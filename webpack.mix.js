const mix = require('laravel-mix')

mix.postCss('01 hello world/app.css', '01 hello world/tailwindcss.css', [
  require('tailwindcss'),
  require('autoprefixer')
])
