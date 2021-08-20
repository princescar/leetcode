/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  if (k === 1) return s;
  let result = '', i = 0, r = true;
  while (i < s.length) {
    const end = Math.min(i + k - 1, s.length - 1);
    if (r) {
      for (let j = end; j >= i; j--) result += s[j];
    } else {
      for (let j = i; j <= end; j++) result += s[j];
    }
    i = end + 1;
    r = !r;
  }
  return result;
};