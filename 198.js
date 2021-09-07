/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  let p = 0, q = nums[0], r = 0;
  for (let i = 1; i < n; i++) {
    r = Math.max(p + nums[i], q);
    p = q;
    q = r;
  }
  return r;
};