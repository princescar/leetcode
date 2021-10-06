/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  const max = [];
  for (const x of nums) {
    if (max.includes(x)) continue;
    if (max.length < 3) max.push(x);
    else if (x > max[0]) max[0] = x;
    max.sort((a, b) => a - b);
  }
  return max.length === 3 ? max[0] : max[max.length - 1];
};