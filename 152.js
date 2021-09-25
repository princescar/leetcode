/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = -Infinity, localMax = -Infinity, localMin = Infinity;
  for (const x of nums) {
    if (x === 0) {
      localMax = localMin = 0;
    } else if (x > 0) {
      localMax = Math.max(x, localMax * x);
      localMin = Math.min(x, localMin * x);
    } else {
      const _localMin = localMin, _localMax = localMax;
      localMin = Math.min(x, _localMax * x);
      localMax = Math.max(x, _localMin * x);
    }
    max = Math.max(max, localMax);
  }
  return max;
};