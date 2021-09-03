const dp = [0,1,1];
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (dp[n] == null) {
    dp[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  }
  return dp[n];
};