/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const n = [...candidates].sort((a, b) => a - b);
  return find(target, []);

  function find(target, arr) {
    if (target === 0) return [arr];
    const min = arr.length > 0 ? arr[arr.length - 1] : 1;
    const result = [];
    for (let x of n) {
      if (x >= min && x <= target) {
        result.push(...find(target - x, [...arr, x]));
      }
    }
    return result;
  }
};