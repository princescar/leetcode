/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let product = nums[0], i = 0, j = 0, ans = 0;
  while (j < nums.length) {
    if (product < k) {
      ++j;
      ans += j - i;
      product *= nums[j];
    } else if (i < j) {
      product /= nums[i];
      ++i;
    } else {
      ++i;
      ++j;
      product = nums[i];
    }
  }
  return ans;
};