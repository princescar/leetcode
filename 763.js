/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const last = [];
  for (let i = 0; i < s.length; i++) last[s[i]] = i;
  const ans = [];
  let start = 0, end = -1;
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s[i]]);
    if (i === end) {
      ans.push(end - start + 1);
      start = end + 1;
    }
  }
  return ans;
};