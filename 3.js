/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let l = 0, r = 0, max = 0;
  const map = [];
  while (r < s.length) {
    if (!map[s[r]]) {
      map[s[r]] = true;
      r++;
    } else {
      map[s[l]] = false;
      l++;
    }
    max = Math.max(max, r - l);
  }
  return max;
};