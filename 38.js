/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1';
  const x = countAndSay(n - 1);
  let result = '', count = 0;
  for (let i = 0; i < x.length; i++) {
    count++;
    if (x[i] !== x[i + 1]) {
      result += count;
      result += x[i];
      count = 0;
    }
  }
  return result;
};