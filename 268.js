/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const t = (1 + nums.length) * nums.length / 2;
  const s = nums.reduce((s, x) => s + x, 0);
  return t - s;
};