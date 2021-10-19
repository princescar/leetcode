/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const map = new Map();
  map.set(0, [-1]);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum)) map.get(sum).push(i);
    else map.set(sum, [i]);
  }
  let ans = 0;
  sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (!map.has(sum - k)) continue;
    const arr = map.get(sum - k);
    for (const j of arr) {
      if (j < i) ans++;
      else break;
    }
  }
  return ans;
};