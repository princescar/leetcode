/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  const n = nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (n[i] === n[i - 1]) return true;
  }
  return false;
};