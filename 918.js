/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  // 1-inteval max.
  let max = -Infinity, localMax = -Infinity;
  for (const x of nums) {
    localMax = Math.max(x, localMax + x);
    max = Math.max(max, localMax);
  }

  // 2-intervals
  const leftMax = [nums[0]];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    leftMax[i] = Math.max(leftMax[i - 1], sum);
  }
  sum = 0;
  for (let i = nums.length - 1; i >= 1; i--) {
    sum += nums[i];
    max = Math.max(max, sum + leftMax[i - 1]);
  }

  return max;
};