module.exports = collectionApi => {
  const pageOrder = ['index.md'];
  const pageOrderLength = pageOrder.length;

  const pages = collectionApi
    .getFilteredByTag('page')
    .map(tObj => {
      const data = tObj.data;
      return {
        title: data.title,
        data,
        category: data.category,
        subCategory: data.subCategory,
        url: data.page.url,
        fileName: tObj.inputPath.split('/').pop()
      };
    })
    .sort((a, b) => {
      let aIndex = pageOrder.indexOf(a.fileName);
      aIndex = aIndex !== -1 ? aIndex : pageOrderLength;
      let bIndex = pageOrder.indexOf(b.fileName);
      bIndex = bIndex !== -1 ? bIndex : pageOrderLength;

      return aIndex - bIndex;
    });

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
    categories: pages.filter(page => page.fileName === 'index.md').reduce(segregateFn('category'), {}),
    subCategories: pages.reduce(segregateFn('subCategory'), {})
  };

  return groups;
};
