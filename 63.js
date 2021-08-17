/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length, n = obstacleGrid[0].length;
  const dp = [];
  return path(0, 0);

  function path(i, j) {
    if (obstacleGrid[i][j]) return 0;
    if (i === m - 1 && j === n - 1) return 1;
    if (!dp[i]) dp[i] = [];
    if (dp[i][j]) return dp[i][j];
    let r = 0;
    if (i < m - 1) r += path(i + 1, j);
    if (j < n - 1) r += path(i, j + 1);
    dp[i][j] = r;
    return r;
  }
};