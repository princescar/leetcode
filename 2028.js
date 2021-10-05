/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
  const m = rolls.length;
  const total = mean * (m + n);
  let remain = total - rolls.reduce((s, x) => s + x, 0);
  if (remain < n || remain > 6 * n) return [];
  const ans = new Array(n).fill(1);
  remain -= n;
  for (let i = 0; remain > 0; i++) {
    const x = Math.min(5, remain);
    ans[i] += x;
    remain -= x;
  }
  return ans;
};