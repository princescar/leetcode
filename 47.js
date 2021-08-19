/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b);
  const swap = (i, j) => [nums[i], nums[j]] = [nums[j], nums[i]];
  const result = [];
  permute(0);
  return result;

  function permute(start) {
    if (start === nums.length - 1) {
      result.push([...nums]);
      return;
    }

    const set = new Set();
    for (let i = start; i < nums.length; i++) {
      if (!set.has(nums[i])) {
        set.add(nums[i]);
        swap(start, i);
        permute(start + 1);
        swap(start, i);
      }
    }
  }
};