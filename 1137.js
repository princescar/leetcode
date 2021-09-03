/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n === 0) return 0;
  if (n < 3) return 1;
  const arr = [0, 1, 1];
  while (n > 2) {
    arr[0] = arr[0] + arr[1] + arr[2];
    arr[1] = arr[1] + arr[2] + arr[0];
    arr[2] = arr[2] + arr[0] + arr[1];
    n -= 3;
  }
  return arr[n];
};