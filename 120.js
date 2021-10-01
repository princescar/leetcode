/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const dp = [];
  return down(0, 0);

  function down(i, j) {
    if (i === triangle.length) return 0;
    if (!dp[i]) dp[i] = [];
    if (dp[i][j] == null)
      dp[i][j] = Math.min(down(i + 1, j), down(i + 1, j + 1)) + triangle[i][j];
    return dp[i][j];
  }
};