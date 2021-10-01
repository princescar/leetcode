/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n < 1) return false;
  while ((n & 1) === 0) n >>>= 1;
  return n === 1;
};