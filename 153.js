/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let l = 0, r = nums.length - 1;
  while (r - l > 1) {
    if (nums[l] < nums[r]) return nums[l];
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[l]) l = mid + 1;
    else r = mid;
  }
  return Math.min(nums[l], nums[r]);
};