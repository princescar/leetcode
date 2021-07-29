/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  let x = n;
  while(x !== 1) {
    if (x % 3) return false;
    x = x / 3;
  }
  return true;
};