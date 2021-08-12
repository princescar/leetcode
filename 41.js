/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (x > 0 && x < nums.length && nums[x - 1] !== x) {
      nums[i] = nums[x - 1];
      nums[x - 1] = x;
      i--;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return nums.length + 1;
};