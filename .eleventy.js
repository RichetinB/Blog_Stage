module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles");
    eleventyConfig.addPassthroughCopy("scripts/main.js");
    eleventyConfig.addPassthroughCopy("scripts/swup.js");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("templates");
  };