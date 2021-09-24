/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) map.set(s[i], -1);
    else map.set(s[i], i);
  }
  let min = Infinity;
  for (const i of map.values()) {
    if (i >= 0 && i < min) min = i;
  }
  return min === Infinity ? -1 : min;
};