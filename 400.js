/**
 * @param {number} n
 * @return {number}
 */
 var findNthDigit = function(n) {
  let digits = 1;
  while (n > 9 * digits * Math.pow(10, digits - 1)) {
    n -= 9 * digits * Math.pow(10, digits - 1);
    digits++;
  }
  const x = Math.pow(10, digits - 1) + Math.floor((n - 1) / digits);
  return parseInt(String(x)[(n - 1) % digits]);
};