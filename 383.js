/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = [];
  for (const c of magazine) {
    map[c] = (map[c] || 0) + 1;
  }
  for (const c of ransomNote) {
    map[c] = (map[c] || 0) - 1;
    if (map[c] < 0) return false;
  }
  return true;
};