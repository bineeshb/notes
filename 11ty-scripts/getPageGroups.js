const getFrontMatter = tObj => {
  const data = tObj.data;
  return {
    title: data.title,
    data,
    category: data.category,
    url: data.page.url.slice(1),
    fileName: tObj.inputPath.split('/').pop()
  };
};

const sortByTitle = (a, b) => {
  const aTitle = a.title.toUpperCase();
  const bTitle = b.title.toUpperCase();

  if (aTitle < bTitle) {
    return -1;
  }

  if (aTitle > bTitle) {
    return 1;
  }

  return 0;
};

const segregateFn = segregateKey => (acc, page) => {
  const key = `${page[segregateKey]}`;

  if (acc[key]) {
    acc[key].push(page);
  } else {
    acc[key] = [page];
  }

  return acc;
};

module.exports = collectionApi => {
  const categories = collectionApi
    .getFilteredByTag('category')
    .map(getFrontMatter)
    .sort(sortByTitle);

  const articles = collectionApi
    .getFilteredByTag('article')
    .map(getFrontMatter)
    .sort(sortByTitle);

  const groups = {
    categories,
    articles: articles.reduce(segregateFn('category'), {})
  };

  return groups;
};
