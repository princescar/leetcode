/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let x = 0;
  for (const y of nums) x ^= y;
  return x ^ 0;
};