/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const a = 'a'.charCodeAt(0);
  const count = [];
  for(let i = 0; i < s.length; i++) {
    const c1 = s.charCodeAt(i) - a;
    const c2 = t.charCodeAt(i) - a;
    count[c1] = (count[c1] || 0) + 1;
    count[c2] = (count[c2] || 0) - 1;
  }
  for(let n of count) {
    if (n) return false;
  }
  return true;
};