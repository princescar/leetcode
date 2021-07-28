/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  return h(n);
  function h(x, previous) {
    if (x === 1) return true;
    let y = x, next = 0;
    while (y > 0) {
      next += Math.pow(y % 10, 2);
      y = Math.floor(y / 10);
    }
    if (next === previous) return false;
    return h(next, x);
  }
};