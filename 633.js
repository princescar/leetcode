/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let l = 0; r = Math.floor(Math.sqrt(c));
  while (l <= r) {
    const x = l * l + r * r;
    if (x === c) return true;
    if (x < c) l++;
    else r--;
  }
  return false;
};