module.exports = collectionApi => {
  const pageOrder = ['index.md'];
  const pageOrderLength = pageOrder.length;

  const getFrontMatter = tObj => {
    const data = tObj.data;
    return {
      title: data.title,
      data,
      category: data.category,
      url: data.page.url,
      fileName: tObj.inputPath.split('/').pop()
    };
  };

  const sortByFileName = (a, b) => {
    let aIndex = pageOrder.indexOf(a.fileName);
    aIndex = aIndex !== -1 ? aIndex : pageOrderLength;
    let bIndex = pageOrder.indexOf(b.fileName);
    bIndex = bIndex !== -1 ? bIndex : pageOrderLength;

    return aIndex - bIndex;
  };

  const categories = collectionApi
    .getFilteredByTag('category')
    .map(getFrontMatter)
    .sort(sortByFileName);

  const articles = collectionApi
    .getFilteredByTag('article')
    .map(getFrontMatter)
    .sort(sortByFileName);

  const segregateFn = segregateKey => (acc, page) => {
    const key = `${page[segregateKey]}`;

    if (acc[key]) {
      acc[key].push(page);
    } else {
      acc[key] = [page];
    }

    return acc;
  };

  const groups = {
    categories,
    articles: articles.reduce(segregateFn('category'), {})
  };

  return groups;
};
