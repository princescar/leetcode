/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
  const ans = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i < k) continue;
    if (i > 2 * k) sum -= nums[i - 2 * k - 1];
    if (i >= 2 * k) ans.push(Math.floor(sum / (2 * k + 1)));
    else ans.push(-1);
  }
  while(ans.length < nums.length) ans.push(-1);
  return ans;
};