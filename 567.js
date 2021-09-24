/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s2.length < s1.length) return false;
  const A = 'a'.charCodeAt(0);
  const map = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    map[s1.charCodeAt(i) - A]++;
  }
  for (let i = 0; i < s1.length; i++) {
    map[s2.charCodeAt(i) - A]--;
  }
  for (let i = s1.length; i < s2.length; i++) {
    if (map.every(x => x === 0)) return true;
    map[s2.charCodeAt(i) - A]--;
    map[s2.charCodeAt(i - s1.length) - A]++;
  }
  return map.every(x => x === 0);
};