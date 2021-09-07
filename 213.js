/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(...nums);
  const cache1 = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < n - 1; i++) {
    cache1[i] = Math.max(cache1[i - 2] + nums[i], cache1[i - 1]);
  }
  const cache2 = [0, nums[1]];
  for (let i = 2; i < n; i++) {
    cache2[i] = Math.max(cache2[i - 2] + nums[i], cache2[i - 1]);
  }
  return Math.max(cache1[n - 2], cache2[n - 1]);
};