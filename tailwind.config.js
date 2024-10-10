/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/blog/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
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
