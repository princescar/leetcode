/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  const diff = Math.max(...nums) - Math.min(...nums);
  return Math.max(0, diff - 2 * k);
};
