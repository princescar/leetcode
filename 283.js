/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zc = 0, z = 0;
  for(let i = 0; i < nums.length - zc; i++) {
    if (nums[i] === 0) {
      z++;
    } else {
      if (z > 0) {
        for (let j = i - z; j < nums.length; j++) {
          nums[j] = nums[j + z];
        }
        zc += z;
        i -= z;
        z = 0;
      }
    }
  }
  for(let i = 0; i < zc; i++) {
    nums[nums.length - i - 1] = 0;
  }
};