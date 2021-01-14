const cheerio = require('cheerio');

module.exports = htmlContent => {
  const $ = cheerio.load(htmlContent);

  if ($('table').length > 0) {
    $('table').addClass('table table-striped table-bordered');
    $('thead').addClass('thead-dark');
  }

  return $.html();
};
