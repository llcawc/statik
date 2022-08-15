// .eleventy.js

const markdown = require('markdown-it')({ html: true })
const htmlmin = require('html-minifier')

module.exports = function (config) {
  config.addPassthroughCopy('./*.htaccess')
  config.addPassthroughCopy('src/assets/js/main.min.js')
  config.addPassthroughCopy('src/assets/css/main.min.css')
  config.addPassthroughCopy('src/assets/images')
  config.addPassthroughCopy('src/assets/fonts')

  config.addPairedShortcode('markdown', (content) => {
    return markdown.render(content)
  })

  config.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      const result = htmlmin.minify(content, {
        removeComments: true,
        collapseWhitespace: true,
      })
      return result
    }
    return content
  })

  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    templateFormats: ['njk', 'md'],
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'dist',
      // ⚠️ Эти значения относятся к входному каталогу.
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
    },
  }
}
