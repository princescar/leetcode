/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length && k && nums[i] < 0; i++, k--)
    nums[i] = -nums[i];
  nums.sort((a, b) => a - b);
  if (k % 2) nums[0] = -nums[0];
  return nums.reduce((s, x) => s + x, 0);
};
