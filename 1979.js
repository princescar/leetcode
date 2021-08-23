/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
  let min = Infinity, max = -Infinity;
  for (const x of nums) {
    if (x < min) min = x;
    if (x > max) max = x;
  }
  let k = min;
  while (max % k || min % k) k--;
  return k;
};
