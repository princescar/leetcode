/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const ans = [];
  let sum = 0;
  for (const x of nums) {
    sum += x;
    ans.push(sum);
  }
  return ans;
};