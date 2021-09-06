/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let i = 0;
  while (nums[i] < 0) i++;
  const ans = [];
  let j = i, k = i - 1;
  while (j < nums.length || k >= 0) {
    if (k < 0 || nums[j] < -nums[k]) {
      ans.push(nums[j] * nums[j]);
      j++;
    } else {
      ans.push(nums[k] * nums[k]);
      k--;
    }
  }
  return ans;
};