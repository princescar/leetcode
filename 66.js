/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 1;
  const result = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    const s = digits[i] + carry;
    result[i] = s % 10;
    carry = s > 9 ? 1 : 0;
  }
  if (carry > 0) result.unshift(carry);
  return result;
};