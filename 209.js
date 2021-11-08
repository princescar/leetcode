/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let sum = nums[0], i = 0, j = 0, min = Infinity;
  while (j < nums.length) {
    if (sum >= target) min = Math.min(min, j - i + 1);
    if (sum >= target) sum -= nums[i++];
    else sum += nums[++j];
  }
  if (sum >= target) min = Math.min(min, j - i);
  return min === Infinity ? 0 : min;
};