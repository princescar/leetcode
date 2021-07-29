/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = nums.length - 1;
  while(nums[i] <= nums[i - 1]) i--;

  if (i > 0) {
    let j = nums.length - 1;
    while(nums[j] <= nums[i - 1]) j--;
    swap(i - 1, j);
  }
  reverse(i, nums.length - 1);

  function reverse(i, j) {
    while(i < j) swap(i++, j--);
  }

  function swap(i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
};