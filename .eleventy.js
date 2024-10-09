module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("src/assets/");
  eleventyConfig.addPassthroughCopy("src/tailwind.config.js");
  eleventyConfig.addPassthroughCopy("src/postcss.config.js");
  eleventyConfig.addPassthroughCopy({ "src/assets/js/*": "assets/js" });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
