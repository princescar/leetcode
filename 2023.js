/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
  const map = new Map();
  let ans = 0;
  for (const x of nums) {
    if (x.length >= target.length) continue;
    if (target.endsWith(x)) {
      const remain1 = target.substr(0, target.length - x.length);
      const c1 = map.get(remain1) || 0;
      ans += c1;
    }
    if (target.startsWith(x)) {
      const remain2 = target.substring(x.length);
      const c2 = map.get(remain2) || 0;
      ans += c2;
    }
    map.set(x, (map.get(x) || 0) + 1);
  }
  return ans;
};