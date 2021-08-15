/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t.length > s.length) return '';
  const map = new Map();
  for (const c of t) map.set(c, (map.get(c) || 0) - 1);
  let l = 0, r = -1, min = '';
  while (r < s.length) {
    const valid = [...map.values()].every(x => x >= 0);
    if (valid) {
      const len = r - l + 1;
      if (len === t.length) return s.substring(l, r + 1);
      if (!min || len < min.length) min = s.substring(l, r + 1);
      if (map.has(s[l])) map.set(s[l], map.get(s[l]) - 1);
      l++;
    } else {
      r++;
      if (map.has(s[r])) map.set(s[r], map.get(s[r]) + 1);
    }
  }
  return min;
};