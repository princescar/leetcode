/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  const set = new Set();
  for (const x of nums) {
    if (set.has(x)) return true;
    else set.add(x);
  }
  return false;
};