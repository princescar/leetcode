/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const n = nums.sort((a, b) => a - b);
  return kSum(0, 4, target);

  function kSum(start, k, t) {
    if (k === 2) return twoSum(start, t);
    const result = [];
    for (let i = start; i < n.length - (k - 1); i++) {
      if (i > start && n[i] === n[i - 1]) continue;
      const pairs = kSum(i + 1, k - 1, t - n[i]);
      pairs.forEach(pair => result.push([n[i], ...pair]));
    }
    return result;
  }

  function twoSum(start, t) {
    let lo = start;
    let hi = n.length - 1;
    const result = [];
    while(lo < hi) {
      const s = n[lo] + n[hi];
      if (s > t || hi < n.length - 1 && n[hi] === n[hi + 1]) {
        hi--;
      } else if (s < t || lo > start && n[lo] === n[lo - 1]) {
        lo++;
      } else {
        result.push([n[lo++], n[hi--]]);
      }
    }
    return result;
  }
};