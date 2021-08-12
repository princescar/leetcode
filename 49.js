/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const sorted = strs.map(x => x.split('').sort().join(''));
  const map = new Map();
  for (let i = 0; i < sorted.length; i++) {
    map.set(sorted[i], [...(map.get(sorted[i]) || []), i]);
  }
  const result = [];
  for (const indices of map.values()) {
    result.push(indices.map(i => strs[i]));
  }
  return result;
};