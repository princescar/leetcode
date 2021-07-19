/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const sums = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    sums[i] = Math.max(nums[i], nums[i] + sums[i - 1]);
  }
  return Math.max(...sums);
};