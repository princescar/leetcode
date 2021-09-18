/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const map = new Map();
  let max = 0;
  for (const x of nums) {
    map.set(x, (map.get(x) || 0) + 1);
    max = Math.max(max, x);
  }
  const dp = [];
  return del(1);

  function del(x) {
    if (x > max) return 0;
    if (dp[x] == null)
      dp[x] = Math.max((map.get(x) || 0) * x + del(x + 2), del(x + 1));
    return dp[x];
  }
};