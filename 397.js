/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
  if (n === 1) return 0;
  if (n % 2) return 1 + Math.min(integerReplacement(n + 1), integerReplacement(n - 1));
  else return 1 + integerReplacement(n / 2);
};