/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [];
  s(0, []);
  return result;

  function s(start, arr) {
    result.push(arr);
    for (let i = start; i < nums.length; i++) {
      s(i + 1, [...arr, nums[i]]);
    }
  }
};