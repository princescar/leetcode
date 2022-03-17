/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  words.sort((a, b) => a.length - b.length);
  const set = new Set();
  set.add('');
  let ans = '';
  for (const w of words) {
    const pre = w.substr(0, w.length - 1);
    if (set.has(pre)) {
      set.add(w);
      if (w.length > ans.length || w < ans) ans = w;
    }
  }
  return ans;
};
