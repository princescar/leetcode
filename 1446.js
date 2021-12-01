/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let ans = p = 0, l = '';
  for (const c of s) {
    if (c === l) p++;
    else {
      l = c;
      p = 1;
    }
    ans = Math.max(ans, p);
  }
  return ans;
};