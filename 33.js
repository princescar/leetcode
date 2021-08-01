/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const n = nums.length
  let left = 0, right = n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    if (nums[mid] >= nums[left]) { // left -> mid is sorted.
      if (target <= nums[mid] && target >= nums[left]) { // target is in range of left -> mid, search left.
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else { // mid -> right is sorted.
      if (target >= nums[mid] && target <= nums[right]) { // target is in range of mid -> right, search right.
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};