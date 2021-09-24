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
  let l = r = 0, n = s1.length;
  while (r < s2.length) {
    const lc = s2.charCodeAt(l) - A;
    const rc = s2.charCodeAt(r) - A;
    if (map[lc] < 0) {
      map[lc]++;
      l++;
    } else {
      if (map[rc] > 0) n--;
      map[rc]--;
      r++;
    }
    if (n === 0 && r - l  === s1.length) return true;
  }
  return false;
};