/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const cache = [0, 1, 1];
  if (n < 3) return cache[n];
  for (let i = 3; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2] + cache[i - 3];
  }
  return cache[n];
};