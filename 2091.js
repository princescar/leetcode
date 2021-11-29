/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
  let min = max = nums[0], j = k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      j = i;
    }
    if (nums[i] > max) {
      max = nums[i];
      k = i;
    }
  }
  [j, k] = [Math.min(j, k), Math.max(j, k)];
  const arr = [j + 1, k - j, nums.length - k];
  arr.sort((a, b) => a - b);
  return arr[0] + arr[1];
};