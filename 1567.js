/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
  let max = pos = neg = 0;
  for (const x of nums) {
    if (x === 0) {
      pos = neg = 0;
    } else if (x > 0) {
      pos++;
      neg = neg > 0 ? neg + 1 : 0;
    } else {
      const _neg = neg;
      neg = pos + 1;
      pos = _neg > 0 ? _neg + 1 : 0;
    }
    max = Math.max(max, pos);
  }
  return max;
};