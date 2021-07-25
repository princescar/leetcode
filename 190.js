/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
  let x = n, result = 0;
  for (let i = 0; i < 31; i++) {
    result <<= 1;
    if (x & 1) result |= 1;
    x >>>= 1;
  }
  result *= 2;
  if (x) result += 1;
  return result;
};