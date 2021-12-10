/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  const map = new Map();
  for (const ch of licensePlate) {
    const char = ch.toLowerCase();
    if (char >= 'a' && char <= 'z') {
      map.set(char, (map.get(char) || 0) + 1);
    }
  }
  let minLen = Infinity, ans;
  for (const word of words) {
    if (word.length >= minLen) continue;
    const map1 = new Map(map);
    for (const ch of word) {
      if (map1.has(ch)) {
        const x = map1.get(ch);
        if (x > 1) map1.set(ch, x - 1);
        else map1.delete(ch);
      }
    }
    if (map1.size === 0) {
      minLen = word.length;
      ans = word;
    }
  }
  return ans;
};