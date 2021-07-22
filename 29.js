/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) {
    return 2147483647;
  }
  let d = dividend, r = divisor;
  let p = true;
  if (dividend < 0) {
    d = -dividend;
    p = !p;
  }
  if (divisor < 0) {
    r = -divisor;
    p = !p;
  }

  let q = 0;
  let x = d;
  while (x >= r) {
    x -= r;
    q += 1;
  }

  return p ? q : -q;
};