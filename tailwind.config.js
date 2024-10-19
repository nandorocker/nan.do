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
    extend: {
      colors: {
        lavender: "#c6c2f2",
        obsidian: "#262628",
        cream: "#fff6ee",
        lime: "#d6dc82",
        cherry: "#d86072",
      },
    },
  },
  plugins: [],
};

// see https://tailwindcss.com/docs/configuration
