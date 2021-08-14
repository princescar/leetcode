/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  return p([]);

  function p(arr) {
    if (arr.length === nums.length) return [arr];
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      if (!arr.includes(nums[i])) {
        result.push(...p([...arr, nums[i]]));
      }
    }
    return result;
  }
};