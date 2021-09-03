/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n === 0) return 0;
  if (n < 3) return 1;
  let c1 = 0, c2 = 1, c3 = 1;
  for (let i = 3; i <= n; i++) {
    const temp = c1;
    c1 = c2;
    c2 = c3;
    c3 = temp + c1 + c2;
  }
  return c3;
};