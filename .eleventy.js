module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles/main.css");
    eleventyConfig.addPassthroughCopy("scripts/main.js");
    eleventyConfig.addPassthroughCopy("scripts/swup.js");
    eleventyConfig.addPassthroughCopy("assets");
  };