/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let len = 0, start = true;
  for (const c of s) {
    if (c === ' ') {
      start = true;
    } else {
      if (start) {
        len = 1;
        start = false;
      } else {
        len++;
      }
    }
  }
  return len;
};