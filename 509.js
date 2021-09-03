/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n < 2) return n;
  const cache = [0, 1];
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[n];
};