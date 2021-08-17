/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length, n = grid[0].length;
  const dp = new Array(m).fill(0).map(() => []);
  dp[m - 1][n - 1] = grid[m - 1][n - 1];
  return path(0, 0);

  function path(i, j) {
    if (dp[i][j] != null) return dp[i][j];
    const sum = grid[i][j] + Math.min(
      i < m - 1 ? path(i + 1, j) : Infinity,
      j < n - 1 ? path(i, j + 1) : Infinity,
    );
    dp[i][j] = sum;
    return sum;
  }
};