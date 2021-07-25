/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let x = n, c = 0;
  while(x > 0) {
    if (x & 1) c++;
    x >>>= 1;
  }
  return c;
};