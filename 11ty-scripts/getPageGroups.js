const getFrontMatter = tObj => {
  const data = tObj.data;
  return {
    title: data.title,
    data,
    category: data.category,
    url: data.page.url.slice(1),
    fileName: tObj.inputPath.split('/').pop(),
    date: data.date
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

const reverseSortByDate = (a, b) => {
  const aDate = new Date(`${a.date}`);
  const bDate = new Date(`${b.date}`);

  if (aDate < bDate) {
    return 1;
  }

  if (aDate > bDate) {
    return -1;
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
    .map(getFrontMatter);

  const latestArticles = articles
    .sort(reverseSortByDate)
    .reduce(segregateFn('category'), {});

  let last10Articles = {};

  Object.keys(latestArticles).forEach((category) => {
    last10Articles[category] = latestArticles[category].slice(0, 10);
  });

  const groups = {
    categories,
    latestArticles: last10Articles,
    articles: articles.sort(sortByTitle).reduce(segregateFn('category'), {})
  };

  return groups;
};
