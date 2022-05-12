/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  const m = strs.length, n = strs[0].length;
  let ans = 0;
  for (let j = 0; j < n; j++) {
    for (let i = 1; i < m; i++) {
      if (strs[i].charCodeAt(j) < strs[i - 1].charCodeAt(j)) {
        ans++;
        break;
      }
    }
  }
  return ans;
};
