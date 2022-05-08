/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const set = new Set();
  const ans = [];
  for (const x of nums) {
    if (set.has(x)) ans.push(x);
    else set.add(x);
  }
  return ans;
};
