/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let last = NaN;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current === last) {
      count += 1;
    } else {
      if (count > 0) {
        for (let j = i; j < nums.length; j++) {
          nums[j - count] = nums[j];
        }
        i -= count;
        nums.length -= count;
        count = 0;
      }
    }
    last = current;
  }
  if (count > 0) {
    nums.length -= count;
  }

  return nums.length;
};