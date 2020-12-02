/* eslint-disable @typescript-eslint/no-var-requires */
// postcss.config.js

const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [tailwindcss, autoprefixer]
};
