/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let min = Infinity, max = -Infinity;
    for (let j = i; j < nums.length; j++) {
      min = Math.min(min, nums[j]);
      max = Math.max(max, nums[j]);
      ans += max - min;
    }
  }
  return ans;
};