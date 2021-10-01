/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const dp = [];
  return common(text1.length - 1, text2.length - 1);

  function common(i, j) {
    if (i < 0 || j < 0) return 0;
    if (!dp[i]) dp[i] = [];
    if (dp[i][j] == null) {
      if (text1[i] === text2[j]) {
        dp[i][j] = common(i - 1, j - 1) + 1;
      } else {
        dp[i][j] = Math.max(common(i - 1, j), common(i, j - 1));
      }
    }
    return dp[i][j];
  }
};