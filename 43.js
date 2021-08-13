/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  const digits = [];
  for (let i = 0; i < num1.length; i++) {
    let carry = 0;
    for (let j = 0; j < num2.length; j++) {
      const x = num1[num1.length - 1 - i] * num2[num2.length - 1 - j] + carry;
      const y = (digits[i + j] || 0) + (x % 10);
      digits[i + j] = y % 10;
      carry = Math.floor(x / 10) + Math.floor(y / 10);
    }
    for (let j = num2.length; carry > 0; j++) {
      const x = (digits[i + j] || 0) + carry;
      digits[i + j] = x % 10;
      carry = Math.floor(x / 10);
    }
  }

  return digits.reverse().join('');
};