/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
  const arr = [...nums].sort((a, b) => b - a).slice(0, k);
  const map = new Map();
  for (const x of arr) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  const ans = [];
  for (const x of nums) {
    if (map.has(x)) {
      ans.push(x);
      if (map.get(x) === 1) map.delete(x);
      else map.set(x, map.get(x) - 1);
    }
  }
  return ans;
};