/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const n = nums.sort((a, b) => a - b);
  const result = new Set();
  for (let i = 0; n[i] <= 0; i++) {
    let j = 0; k = n.length - 1;
    while (j < k) {
      const s = n[i] + n[j] + n[k];
      if (s > 0) {
        const c = n[k];
        while(n[--k] === c && k > j);
      } else {
        if (s === 0 && j !== i && k !== i) {
          result.add([n[i], n[j], n[k]].sort((a, b) => a - b).join());
        }
        const c = n[j];
        while(n[++j] === c && j < k);
      }
    }
  }
  return [...result].map(x => x.split(',').map(y => parseInt(y)));
};
