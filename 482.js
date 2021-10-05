/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  const ans = [];
  for (let i = s.length - 1, x = k; i >= 0; i--) {
    if (s[i] === '-') continue;
    ans.unshift(s[i].toUpperCase());
    x--;
    if (x === 0) {
      ans.unshift('-');
      x = k;
    }
  }
  return ans.join('').replace(/^-/, '');
};