/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map();
  for (const x of nums) map.set(x, (map.get(x) || 0) + 1);
  const arr = [];
  for (let [x, count] of map) arr.push({ x, count });
  arr.sort((a, b) => b.count - a.count);
  return arr.slice(0, k).map(x => x.x);
};