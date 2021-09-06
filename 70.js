/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const cache = [,1,2];
  if (n < 3) return cache[n];
  for (let i = 3; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[n];
};