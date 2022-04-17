/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const words = paragraph
    .split(/[!?',;. ]+/g)
    .filter(x => !!x)
    .map(x => x.toLowerCase());
  const map = new Map();
  for (const word of words) {
    if (!map.has(word)) map.set(word, 1);
    else map.set(word, map.get(word) + 1);
  }
  let ans = '', max = 0;
  for (const [word, count] of map) {
    if (count > max && !banned.includes(word)) {
      max = count;
      ans = word;
    }
  }
  return ans;
};
