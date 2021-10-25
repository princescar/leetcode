/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const map = new Map();
  for (const c of s) map.set(c, (map.get(c) || 0) + 1);
  const arr = [];
  for (let [char, count] of map) arr.push({char, count});
  arr.sort((a, b) => b.count - a.count);
  let ans = '';
  for (const { char, count } of arr) ans += char.repeat(count);
  return ans;
};