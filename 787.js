/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  const matrix = new Array(n).fill(0).map(() => []);
  for (const [from, to, price] of flights) matrix[to][from] = price;
  const dp = [];
  const result = price([dst]);
  return result === Infinity ? -1 : result;

  function price(path) {
    const last = path[path.length - 1];
    if (last === src) return 0;
    const remain = k + 1 - path.length;
    if (remain < 0) return Infinity;
    if (!dp[last]) dp[last] = [];
    if (dp[last][remain] != null) return dp[last][remain];
    let min = Infinity;
    for (let i = 0; i < n; i++) {
      if (!matrix[last][i]) continue;
      if (path.includes(i)) continue;
      const p = matrix[last][i] + price([...path, i]);
      if (p < min) min = p;
    }
    dp[last][remain] = min;
    return min;
  }
};