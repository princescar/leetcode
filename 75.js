/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let l = 0, r = nums.length - 1;
  while (nums[l] === 0) l++;
  while (nums[r] === 2) r--;
  let i = l;
  while (i <= r) {
    if (nums[i] === 0 && i !== l) swap(i, l++);
    else if (nums[i] === 2 && i !== r) swap(i, r--);
    else i++;
  }

  function swap(i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
};