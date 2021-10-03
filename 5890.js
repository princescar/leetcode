/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
  let ans = 0, i = 0;
  while (i < s.length) {
    if (s[i] === 'O') {
      i++;
    } else {
      i += 3;
      ans++;
    }
  }
  return ans;
};