/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const queue = [[nums[0]]];
  for (let i = 1; i < nums.length; i++) {
    const x = nums[i];
    let n = queue.length;
    while (n > 0) {
      const arr = queue.shift();
      for (let j = 0; j <= arr.length; j++) {
        const item = [...arr];
        item.splice(j, 0, x);
        queue.push(item);
      }
      n--;
    }
  }
  return queue;
};