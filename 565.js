/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  const flag = [];
  let max = 0, left = nums.length;
  for (const x of nums) {
    if (left <= max) break;
    if (flag[x]) continue;
    nest(x);
  }
  return max;

  function nest(k) {
    let x = nums[k], len = 1;
    while (true) {
      flag[x] = true;
      if (x === k) break;
      x = nums[x];
      len++;
    }
    if (len > max) max = len;
  }
};