const isProdBuild = process.env.NODE_ENV === 'production';

module.exports = {
  isProdBuild,
  isDevBuild: !isProdBuild,
  baseHref: isProdBuild ? '/notes/' : '/',
  title: 'Notes'
};
