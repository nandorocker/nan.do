/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ],
  theme: {
    fontFamily: {
      sans: ["Work Sans", "regular"],
      serif: ["Merriweather", "regular"],
      slab: ["Montserrat Alternates", "black"],
    },
    extend: {},
  },
  plugins: [],
};

// see https://tailwindcss.com/docs/configuration
