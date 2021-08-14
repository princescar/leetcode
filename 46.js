/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  p(0);
  return result;

  function p(start) {
    if (start === nums.length) {
      result.push([...nums]);
    } else {
      for (let i = start; i < nums.length; i++) {
        swap(start, i);
        p(start + 1);
        swap(start, i);
      }
    }
  }

  function swap(i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
};