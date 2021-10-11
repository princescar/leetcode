/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const set = new Set();
  let ans = 0;
  for (const c of s) {
    if (set.has(c)) {
      ans += 2;
      set.delete(c);
    } else {
      set.add(c);
    }
  }
  if (set.size) ++ans;
  return ans;
};