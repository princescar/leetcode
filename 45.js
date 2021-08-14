/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let steps = 0, i = 0, j = 0;
  while (j < nums.length - 1) {
    let max = j;
    for (let k = i; k <= j; k++) {
      if (k + nums[k] > max) max = k + nums[k];
    }
    i = j + 1;
    j = max;
    steps++;
  }
  return steps;
};

console.log(jump([1,2,1,1,1]));