/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let k = 0, count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
      if (count <= 2) nums[k++] = nums[i];
    } else {
      nums[k++] = nums[i];
      count = 1;
    }
  }
  return k;
};