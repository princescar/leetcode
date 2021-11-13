/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
  const map = new Map();
  for (const c of word1) map.set(c, (map.get(c) || 0) + 1);
  for (const c of word2) map.set(c, (map.get(c) || 0) - 1);
  for (const x of map.values()) {
    if (Math.abs(x) > 3) return false;
  }
  return true;
};