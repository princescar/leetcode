/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
  if (original.length !== m * n) return [];
  const ans = new Array(m).fill(0).map(() => new Array(n));
  for (let i = 0; i < m * n; i++) {
    const r = Math.floor(i / n), c = i % n;
    ans[r][c] = original[i];
  }
  return ans;
};