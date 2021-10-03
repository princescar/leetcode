/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  const negative = numerator < 0 && denominator > 0 || numerator > 0 &&denominator < 0;
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  const arr = [Math.floor(numerator / denominator)];
  if (negative) arr.unshift('-');
  numerator %= denominator;
  if (numerator) arr.push('.');
  const map = new Map();
  while (numerator > 0) {
    if (map.has(numerator)) {
      const index = map.get(numerator);
      arr.splice(index, 0, '(');
      arr.push(')');
      break;
    }
    map.set(numerator, arr.length);
    numerator *= 10;
    const digit = Math.floor(numerator / denominator);
    arr.push(digit);
    numerator %= denominator;
  }
  return arr.join('');
};