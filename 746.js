/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const n = cost.length;
  const cache = [];
  return Math.min(climb(0), climb(1));

  function climb(i) {
    if (i >= n) return 0;
    if (cache[i] == null)
      cache[i] = cost[i] + Math.min(climb(i + 1), climb(i + 2));
    return cache[i];
  }
};