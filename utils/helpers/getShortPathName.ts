export const getShortPathName = (fullPath: string) => {
  const pathByWords = fullPath.split(' ');
  const isPathTooLong = pathByWords.length > 3;
  const shortPath = pathByWords.slice(0, 3).join(' ');
  const ending = '...';

  return isPathTooLong ? shortPath + ending : fullPath;
};

// module.exports = { getShortPathName };
