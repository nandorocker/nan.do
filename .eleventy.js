module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/sass/");

    eleventyConfig.addPassthroughCopy("./src/sass/");

    return {
        dir: {
            input: "src",
            output: "public",
        }
    }
}