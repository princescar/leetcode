/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let candidate = null, count = 0;
  for (const x of nums) {
    if (count === 0) {
      candidate = x;
      count = 1;
    } else if (candidate === x) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
};