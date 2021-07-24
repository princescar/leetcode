/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const count = new Map();
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    let c = count.get(x);

    if (c) count.set(x, c + 1);
    else count.set(x, 1);

    c = count.get(x);
    if (c > nums.length / 2) return x;
  }
};