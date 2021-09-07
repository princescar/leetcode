/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let count = 0, x = 0;
  for (const c of s) {
    if (c === 'R') x++;
    else x--;
    if (x === 0) count++;
  }
  return count;
};