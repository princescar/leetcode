/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  const cache = [];
  return seek(s1, s2, s3);

  function seek(s1, s2, s3) {
    if (!s1 && !s2 && !s3) return true;
    if (!cache[s1]) cache[s1] = [];
    if (!cache[s1][s2]) cache[s1][s2] = [];
    if (cache[s1][s2][s3] != null) return cache[s1][s2][s3];
    cache[s1][s2][s3] =
      s1 && s1[0] === s3[0] && seek(s1.substring(1), s2, s3.substring(1)) ||
      s2 && s2[0] === s3[0] && seek(s1, s2.substring(1), s3.substring(1));
    return cache[s1][s2][s3];
  }
};