/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const n = cost.length;
  const cache = [cost[0], cost[1]];
  for (let i = 2; i < n; i++) {
    cache[i] = cost[i] + Math.min(cache[i - 1], cache[i - 2]);
  }
  return Math.min(cache[n - 1], cache[n - 2]);
};