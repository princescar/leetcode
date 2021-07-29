/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const first = new Map();
  for(let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i);
    if (!first.has(ch)) {
      first.set(ch, i);
    } else {
      first.set(ch, -1);
    }
  }
  const r = [...first.values()].filter(x => x >= 0);
  return r.length > 0 ? Math.min(...r) : -1;
};