/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if ((i === 0 || nums[i] > nums[i - 1])&&
      (i + 1 === nums.length || nums[i] > nums[i + 1])) {
      return i;
    }
  }
};