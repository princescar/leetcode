/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
  let max = 0, count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max + 1) {
      count++;
      max += max + 1;
      i--;
    } else {
      max = max + nums[i];
    }
    if (max >= n) return count;
  }
  while (max < n) {
    count++;
    max += max + 1;
  }
  return count;
};