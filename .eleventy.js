module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("src/assets/css/*");
  eleventyConfig.addWatchTarget("tailwind.config.js");
  eleventyConfig.addPassthroughCopy({ "src/assets/js/*": "assets/js" });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
