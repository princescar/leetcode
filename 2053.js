/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  const map = new Map();
  for (const str of arr)
    map.set(str, (map.get(str) || 0) + 1);
  let i = 0;
  for (const str of arr) {
    if (map.get(str) > 1) continue;
    i++;
    if (i === k) return str;
  }
  return '';
};