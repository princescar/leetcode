/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const map = new Map();
  for (const x of nums) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  const arr = [...map.keys()].sort((a, b) => a - b);
  let ans = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === 1) {
      ans = Math.max(ans, map.get(arr[i]) + map.get(arr[i - 1]));
    }
  }
  return ans;
};