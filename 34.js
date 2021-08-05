/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const x = find();
  if (x < 0) return [-1, -1];
  return [left(x), right(x)];

  function find() {
    let l = 0; r = nums.length - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (target === nums[mid]) return mid;
      else if (target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    }
    return -1;
  }

  function left(right) {
    let l = 0; r = right;
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (target === nums[mid]) r = mid;
      else l = mid + 1;
    }
    return l;
  }

  function right(left) {
    let l = left; r = nums.length - 1;
    while (l < r) {
      const mid = Math.ceil((l + r) / 2);
      if (target === nums[mid]) l = mid;
      else r = mid - 1;
    }
    return r;
  }
};