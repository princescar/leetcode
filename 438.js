/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const idx = (str, i) => str.charCodeAt(i) - 'a'.charCodeAt(0);
  const count = new Array(26).fill(0);
  const anagram = () => count.every(x => x === 0);
  for (let i = 0; i < p.length; i++) --count[idx(p, i)];
  const ans = [];
  let i = 0, j = 0;
  while (j <= s.length) {
    if (j - i < p.length) {
      ++count[idx(s, j)];
      j++;
    } else if (j - i > p.length) {
      --count[idx(s, i)];
      i++;
    } else {
      if (anagram()) ans.push(i);
      ++count[idx(s, j)];
      j++;
    }
  }
  return ans;
};