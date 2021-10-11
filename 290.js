/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const arr = s.split(' ');
  if (pattern.length !== arr.length) return false;
  const map1 = new Map();
  const map2 = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const str = arr[i];
    const ptn = pattern[i];
    if (map1.has(str)) {
      if (map1.get(str) !== ptn) return false;
    } else {
      map1.set(str, ptn);
    }
    if (map2.has(ptn)) {
      if (map2.get(ptn) !== str) return false;
    } else {
      map2.set(ptn, str);
    }
  }
  return true;
};