/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  for (let i = 0, max = 0; i < nums.length - 1; i++) {
    if (i + nums[i] > max) max = i + nums[i];
    if (nums[i] === 0 && max <= i) return false;
  }
  return true;
};