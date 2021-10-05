/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var waysToPartition = function(nums, k) {
  const sum = nums.reduce((s, x) => s + x, 0);

  const diffs = [];
  let left = 0, right = sum;
  for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i];
    right -= nums[i];
    diffs[i] = left - right;
  }
  console.log(diffs);
  let max = diffs.filter(x => x === 0).length;

  for (let i = 0; i < nums.length; i++) {
    const diff = nums[i] - k;
    const x1 = diffs.slice(0, i + 1).filter(x => x === -diff).length;
    const x2 = diffs.slice(i + 1).filter(x => x === diff).length;
    max = Math.max(max, x1 + x2);
  }

  return max;
};