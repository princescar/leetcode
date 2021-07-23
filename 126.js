/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let r = 0;
  for (let n of nums) r ^= n;
  return 0 ^ r;
};