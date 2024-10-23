/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ],
  theme: {
    fontFamily: {
      sans: ["Work Sans", "regular"],
    },
    extend: {
      colors: {
        lavender: "#c6c2f2",
        obsidian: "#262628",
        cream: "#fff6ee",
        lime: "#d6dc82",
        cherry: "#d86072",
      },
      borderWidth: {
        6: "6px",
      },
      borderRadius: {
        xl: "1rem",
      },
      height: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "100vh": "100vh",
      },
      minHeight: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "100vh": "100vh",
      },
    },
  },
  plugins: [],
};

// see https://tailwindcss.com/docs/configuration
