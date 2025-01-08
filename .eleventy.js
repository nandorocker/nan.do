const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  // Add custom watch targets for CSS and config files
  eleventyConfig.addWatchTarget("src/assets/css/tailwind.css");
  eleventyConfig.addWatchTarget("tailwind.config.js");

  // Passthrough copy for assets (JS, images, fonts)
  eleventyConfig.addPassthroughCopy("src/assets/css", {
    filter: [
      "**/*.css", //copy these
      "!tailwind.css", // don't copy this file
    ],
  });
  eleventyConfig.addPassthroughCopy(
    "src/assets/images/work/digital-concert-hall/bg-orchestra.jpg"
  );
  eleventyConfig.addPassthroughCopy(
    "src/assets/images/work/spellstruck/bg-spellstruck.png"
  );
  eleventyConfig.addPassthroughCopy(
    "src/assets/images/work/testflight/bg-testflight.jpg"
  );
  eleventyConfig.addPassthroughCopy("src/assets/fonts/*");
  eleventyConfig.addPassthroughCopy("src/favicon.png");
  eleventyConfig.addPassthroughCopy("src/assets/js/*");
  eleventyConfig.addPassthroughCopy({
    "node_modules/taos/dist/taos.js": "taos.js",
    "node_modules/taos/dist/taos.js.map": "taos.js.map",
  });

  // Optional advanced chokidar setup
  eleventyConfig.setServerOptions({
    liveReload: true,
    domDiff: true,
    watch: ["src/**/*.css", "src/**/*.js"], // Adjust according to the paths to watch
    open: true, // Automatically open the browser
    port: 8080, // Use a specific port for development
    showAllHosts: true, // For more flexibility in dev environments
    indexFileName: "index.html",
  });

  // Global Data
  eleventyConfig.addGlobalData("images", "/assets/images");
  // Add a shortcode for the copyright year
  eleventyConfig.addShortcode("year", () => {
    const startYear = 2024; // Replace with the first year of your portfolio
    const currentYear = new Date().getFullYear();
    return currentYear === startYear
      ? `${currentYear}`
      : `${startYear}–${currentYear}`;
  });

  // Images
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // which file extensions to process
    extensions: "html",

    // Add any other Image utility options here:

    // optional, output image formats
    formats: ["webp", "jpeg"],
    // formats: ["auto"],

    // optional, output image widths
    widths: ["auto", 400, 800],
    // widths: ["auto"],

    // optional, attributes assigned on <img> override these values.
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
      sizes: "auto",
    },

    // Add these settings
    urlPath: "/assets/images/", // URL prefix for transformed images
    outputDir: "./public/assets/images/", // Physical output directory
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
