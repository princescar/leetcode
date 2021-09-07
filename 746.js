/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const n = cost.length;
  let p = cost[0], q = cost[1], r = 0;
  for (let i = 2; i < n; i++) {
    r = cost[i] + Math.min(p, q);
    p = q;
    q = r;
  }
  return Math.min(p, q);
};