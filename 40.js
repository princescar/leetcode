/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const n = [...candidates].sort((a, b) => a - b);
  return find(target, []).map(item => item.map(i => n[i]));

  function find(target, arr) {
    if (target === 0) return [arr];
    const result = [];
    const start = arr.length > 0 ? arr[arr.length - 1] + 1 : 0;
    for (let i = start; i < n.length; i++) {
      if (n[i] > target) break;
      if (i === start || n[i] !== n[i - 1]) {
        result.push(...find(target - n[i], [...arr, i]));
      }
    }
    return result;
  }
};