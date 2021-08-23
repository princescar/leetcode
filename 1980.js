/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
  const n = nums.length;
  const flag = [];
  for (const x of nums) {
    flag[parseInt(x, 2)] = true;
  }
  for (let i = 0; i < Math.pow(2, n); i++) {
    if (!flag[i]) return i.toString(2).padStart(n, '0');
  }
};