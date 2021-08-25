/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var complexNumberMultiply = function(num1, num2) {
  const [r1, i1] = num1.slice(0, num1.length - 1).split('+').map(x => parseInt(x));
  const [r2, i2] = num2.slice(0, num2.length - 1).split('+').map(x => parseInt(x));
  const r = r1 * r2 - i1 * i2;
  const i = r1 * i2 + r2 * i1;
  return `${r}+${i}i`;
};