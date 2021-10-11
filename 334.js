/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let min = Infinity, min2 = Infinity;
  for (const x of nums) {
    if (x > min2) return true;
    else if (x > min) min2 = x;
    else min = x;
  }
  return false;
};