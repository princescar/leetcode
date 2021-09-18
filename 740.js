/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const map = new Map();
  let max = 0;
  for (const x of nums) {
    map.set(x, (map.get(x) || 0) + 1);
    max = Math.max(max, x);
  }
  const cache = [0];
  for (let i = 1; i <= max; i++) {
    cache[i] = Math.max(
      (map.get(i) || 0) * i + (cache[i - 2] || 0),
      cache[i - 1],
    );
  }
  return cache[max];
};