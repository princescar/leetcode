const dp = [0, 1];

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (dp[n] == null) {
    dp[n] = fib(n - 1) + fib(n - 2);
  }
  return dp[n];
};