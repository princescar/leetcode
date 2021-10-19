/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const sums = [0];
  for (let i = 0; i < nums.length; i++)
    sums[i + 1] = sums[i] + nums[i];
  let ans = 0;
  for (let i = 0; i < sums.length; i++) {
    for (let j = i + 1; j < sums.length; j++) {
      if (sums[j] - sums[i] === k) ans++;
    }
  }
  return ans;
};