/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  let min = nums[0], ans = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      ans += (min - nums[i]) * i;
      min = nums[i];
    } else {
      ans += nums[i] - min;
    }
  }
  return ans;
};