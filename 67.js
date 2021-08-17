/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1, j = b.length - 1,
    result = [], carry = 0;
  while (i >= 0 || j >= 0) {
    const x = i >= 0 && a[i--] === '1' ? 1 : 0;
    const y = j >= 0 && b[j--] === '1' ? 1 : 0;
    const z = x + y + carry;
    result.unshift(z & 1);
    carry = z >> 1;
  }
  if (carry) result.unshift(carry);
  return result.join('');
};