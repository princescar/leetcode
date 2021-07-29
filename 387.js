/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const first = new Map();
  for(let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i);
    if (first.get(ch) == null) {
      first.set(ch, i);
    } else {
      first.set(ch, -1);
    }
  }
  return Math.min(...first.values()) || -1;
};