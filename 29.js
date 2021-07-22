/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  if (divisor === 1) return dividend;
  if (divisor === -1) return -dividend;

  const s = dividend < 0 && divisor < 0 || dividend >= 0 && divisor > 0;

  let d = Math.abs(dividend), r = Math.abs(divisor);
  let q = 0;
  while (d >= r) {
    let t = r, i = 0;
    while(d >= t) {
      if (t > 1073741823) break;
      t <<= 1;
      i += 1;
    }
    t >>= 1;
    i -= 1;

    if (i >= 0) {
      q += 1 << i;
      d -= t;
    } else {
      q += 1;
      d -= r;
    }
  }

  return s ? q : -q;
};