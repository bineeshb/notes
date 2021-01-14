const del = require('del');
const htmlmin = require('html-minifier');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const site = require('./src/_data/site');
const getPageGroups = require('./11ty-scripts/getPageGroups');
const addBootStrapClasses = require('./11ty-scripts/addBootStrapClasses');

const prodOutputDir = 'docs';
const devOutputDir = 'dist';
const outputDir = site.isProdBuild ? prodOutputDir : devOutputDir;

/**
 * HTML minification using html-minifier
 */
function minifyHTML(content, outputPath) {
  if (outputPath.endsWith('.html')) {
    content = addBootStrapClasses(content);
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true
    });

    return minified;
  }

  return content;
}

module.exports = function (eleventyConfig) {
  // Delete build folder
  del(prodOutputDir);
  del(devOutputDir);

  if (site.isDevBuild) {
    eleventyConfig.addPassthroughCopy({
      'src/assets': '/assets'
    });
  }

  eleventyConfig.addCollection('groups', getPageGroups);

  // Syntax Highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // HTML Minification
  eleventyConfig.addTransform('htmlmin', minifyHTML);

  return {
    passthroughCopy: true,
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'md', 'njk'],
    dir: {
      input: 'src/pages',
      output: outputDir,
      includes: '../_includes',
      data: '../_data',
      layouts: '../_layouts'
    }
  };
};
