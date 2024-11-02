module.exports = function (eleventyConfig) {
  // Add custom watch targets for CSS and config files
  eleventyConfig.addWatchTarget("src/assets/css/tailwind.css");
  eleventyConfig.addWatchTarget("tailwind.config.js");

  // Passthrough copy for assets (JS, images, fonts)
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
  eleventyConfig.addPassthroughCopy("src/assets/js/*");
  eleventyConfig.addPassthroughCopy("src/assets/images/*");
  eleventyConfig.addPassthroughCopy("src/assets/fonts/*");
  eleventyConfig.addPassthroughCopy("src/favicon.png");

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

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
