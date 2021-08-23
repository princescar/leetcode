/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
var minimizeTheDifference = function(mat, target) {
  const m = mat.length, n = mat[0].length;
  const rowMin = [], rowMax = [];
  for (let i = m - 1; i >= 0; i--) {
    let min = Infinity, max = -Infinity;
    for (const x of mat[i]) {
      if (x < min) min = x;
      if (x > max) max = x;
    }
    rowMin[i] = min + (rowMin[i + 1] || 0);
    rowMax[i] = max + (rowMax[i + 1] || 0);
  }
  const dp = [];
  return choose(0, target);

  function choose(row, x) {
    if (row === m) return Math.abs(x);
    if (x <= rowMin[row]) return rowMin[row] - x;
    if (x >= rowMax[row]) return x - rowMax[row];
    if (!dp[row]) dp[row] = [];
    if (dp[row][x] != null) return dp[row][x];
    let min = Infinity;
    for (let i = 0; i < n; i++) {
      const diff = choose(row + 1, x - mat[row][i]);
      if (diff === 0) return 0;
      if (diff < min) min = diff;
    }
    dp[row][x] = min;
    return min;
  }
};