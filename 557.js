/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.split('');
  const swap = (i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
  for (let i = 0, j = 0; i <= arr.length; i++) {
    if (i === arr.length || s[i] === ' ') {
      let k = i - 1;
      while (j < k) swap(j++, k--);
      j = i + 1;
    }
  }
  return arr.join('');
};