/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n < 2) return n;
  const arr = [0, 1];
  while (n > 1) {
    arr[0] = (arr[0] + arr[1]) % 1000000007;
    arr[1] = (arr[1] + arr[0]) % 1000000007;
    n -= 2;
  }
  return arr[n];
};