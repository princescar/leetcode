/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const v1 = version1.split('.'), v2 = version2.split('.');
  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    const a = parseInt(v1[i] || 0, 10), b = parseInt(v2[i] || 0, 10);
    if (a < b) return -1;
    if (a > b) return 1;
  }
  return 0;
};