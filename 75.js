/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  const count = new Array(3).fill(0);
  for (const x of nums) count[x]++;
  let i = 0;
  for (let j = 0; j < 3; j++)
    for (let k = 0; k < count[j]; k++)
      nums[i++] = j;
};