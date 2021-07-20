/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const n = nums.sort((a, b) => a - b);
  let minDiff = (nums[0] + nums[1] + nums[2]) - target;
  for (let i = 0; i < nums.length; i++) {
    let j = 0, k = n.length - 1;
    while(j < k) {
      if (i === j) {
        j++;
        continue;
      }
      if (i === k) {
        k--;
        continue;
      }

      const s = n[i] + n[j] + n[k];
      const diff = s - target;
      if (diff === 0) return target;

      if (Math.abs(diff) < Math.abs(minDiff)) minDiff = diff;

      if (diff > 0) {
        const current = n[k];
        while(n[--k] === current && j < k);
      } else {
        const current = n[j];
        while(n[++j] === current && j < k);
      }
    }
  }
  return target + minDiff;
};