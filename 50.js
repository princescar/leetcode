/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  }

  if (n % 2 === 0) {
    const r = myPow(x, n / 2);
    return r * r;
  }

  if (n > 0) {
    return x * myPow(x, n - 1);
  } else {
    return myPow(x, n + 1) / x;
  }
};