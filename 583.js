/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const dp = [];
  return distance(0, 0);

  function distance(i, j) {
    if (i === word1.length) return word2.length - j;
    if (j === word2.length) return word1.length - i;
    if (!dp[i]) dp[i] = [];
    if (!dp[i][j]) {
      dp[i][j] = 1 + Math.min(distance(i + 1, j), distance(i, j + 1));
      if (word1[i] === word2[j]) dp[i][j] = Math.min(dp[i][j], distance(i + 1, j + 1));
    }
    return dp[i][j];
  }
};
