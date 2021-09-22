/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  if (n === 1) return 0;
  let min = Infinity;
  for (let i = n - 1; i >= 1; i--) {
    if (n % i === 0) {
      min = Math.min(min, minSteps(i) + n / i);
    }
  }
  return min;
};