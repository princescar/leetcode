/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const map = new Array(10001).fill(0);
  let max = 0;
  for (const x of nums) {
    map[x]++;
    max = Math.max(max, x);
  }
  let p = map[1], q = Math.max(map[1], map[2] * 2), r;
  if (max === 1) return p;
  else if (max === 2) return q;
  for (let i = 3; i <= max; i++) {
    r = Math.max(map[i] * i + p, q);
    p = q;
    q = r;
  }
  return r;
};