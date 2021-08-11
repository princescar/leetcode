/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const result = [];
  let i1 = num1.length - 1, i2 = num2.length - 1;
  let carry = 0;
  while (i1 >= 0 || i2 >= 0) {
    const x1 = i1 >= 0 ? parseInt(num1[i1--]) : 0;
    const x2 = i2 >= 0 ? parseInt(num2[i2--]) : 0;
    const x = x1 + x2 + carry;
    carry = Math.floor(x / 10);
    result.unshift(x % 10);
  }
  if (carry) result.unshift(carry);
  return result.join('');
};