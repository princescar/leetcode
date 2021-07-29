/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const half = Math.floor(s.length / 2);
  for(let i = 0; i < half; i++) {
    const t = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = t;
  }
};