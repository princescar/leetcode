/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0, count = 0;
  for (const x of nums) {
    if (x) count++;
    else count = 0;
    max = Math.max(max, count);
  }
  return max;
};