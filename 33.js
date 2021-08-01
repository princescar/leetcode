/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const n = nums.length
  let i = 0, j = n - 1;
  while (i < j - 1) {
    const mid = Math.floor((i + j) / 2);
    if (nums[mid] < nums[i]) j = mid;
    else if (nums[mid] > nums[j]) i = mid;
    else break;
  }
  const start = nums[i] > nums[j] ? j : i;
  i = 0; j = n - 1;
  while (i <= j) {
    const mid = Math.floor((i + j) / 2);
    const realMid = (mid + start) % n;
    if (nums[realMid] < target) i = mid + 1;
    else if (nums[realMid] > target) j = mid - 1;
    else return realMid;
  }
  return -1;
};