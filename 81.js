/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return true;
    if (nums[l] === target) return true;
    if (nums[r] === target) return true;

    if (nums[mid] > nums[l]) {
      if (target < nums[mid] && target > nums[l]) r = mid - 1;
      else l = mid + 1;
    } else if (nums[mid] < nums[r]) {
      if (target > nums[mid] && target < nums[r]) l = mid + 1;
      else r = mid - 1;
    } else if (nums[mid] < nums[l]) {
      r = mid - 1;
    } else if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      l++;
      r--;
    }
  }
  return false;
};