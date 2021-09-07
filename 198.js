/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const cache = [];
  return r(0);
  function r(i) {
    if (i >= nums.length) return 0;
    if (cache[i] == null)
      cache[i] = Math.max(nums[i] + r(i + 2), r(i + 1));
    return cache[i];
  }
};