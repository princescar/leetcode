/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  const n = nums.length;
  k %= n;
  if (k === 0) return;
  let i = 0, x = n;
  while (x > 0) {
    let j = i, prev = nums[i];
    do {
      const next = (j + k) % n;
      const temp = nums[next];
      nums[next] = prev;
      prev = temp;
      j = next;
      x--;
    } while (j !== i)
    i++;
  }
};