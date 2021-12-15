/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const cache = [1];
  for (let i = 1; i <= n; i++) {
    cache[i] = 0;
    for (let j = 0; j < i; j++) {
      cache[i] += cache[j] * cache[i - j - 1];
    }
  }
  return cache[n];
};