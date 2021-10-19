/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
  const max = nums.reduce((m, x) => m | x, 0);
  return go(0, 0);

  function go(i, x) {
    if (i === nums.length)
      return x === max ? 1 : 0;
    return go(i + 1, x | nums[i]) + go(i + 1, x);
  }
};