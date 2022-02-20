var renderFootnotes = require('./src/footnotes');
    util = require('hexo-util');

// Register footnotes filter
hexo.extend.filter.register('before_post_render', function(data) {
  data.content = renderFootnotes(data.content);
  return data;
});

// Add CDN CSS resources
const injectCss = '<!-- hint.css -->' +
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hint.css@2.7.0/hint.min.css">';
hexo.extend.filter.register('after_render:html', function (htmlContent) {
  // 注入 css
  if (/<\/body>/gi.test(htmlContent)) {
    let lastIndex = htmlContent.lastIndexOf('</body>');
    htmlContent = htmlContent.substring(0, lastIndex) + injectCss + htmlContent.substring(lastIndex, htmlContent.length);
  }
  return htmlContent;
}, 0);
