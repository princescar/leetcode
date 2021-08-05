/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
  const n = [...nums].sort((a, b) => a - b);
  const r = [];
  s([], 0);
  return r;

  function s(a, si) {
    r.push(a);
    if (si < n.length) {
      for (let i = si; i < n.length; i++) {
        if (i === si || n[i] !== n[i - 1])
          s([...a, n[i]], i + 1);
      }
    }
  }
};