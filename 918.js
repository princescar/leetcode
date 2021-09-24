/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  const n = nums.length;
  let max = -Infinity, localMax = -Infinity;
  for (let i = 0, si = 0; i < 2 * n; i++) {
    const j = i % n;
    if (i % n === si) {
      let min = nums[si], sum = nums[si], minI = si;
      for (let k = si + 1; k < si + n; k++) {
        const l = k % n;
        sum += nums[l];
        if (sum < min) {
          min = sum;
          minI = l;
        }
      }
      localMax -= min;
      si = minI + 1;
    }
    if (nums[j] >= localMax + nums[j]) si = j;
    localMax = Math.max(nums[j], localMax + nums[j]);
    max = Math.max(max, localMax);
  }
  return max;
};