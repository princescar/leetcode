/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  let max = 0;
  for (const w1 of words) {
    for (const w2 of words) {
      if (!sameLetter(w1, w2)) {
        max = Math.max(max, w1.length * w2.length);
      }
    }
  }
  return max;

  function sameLetter(w1, w2) {
    const exist = [];
    for (const ch of w1) exist[ch] = true;
    for (const ch of w2) {
      if (exist[ch]) return true;
    }
    return false;
  }
};