/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
  const arr = new Array(n).fill(0).map((_, i) => i + 1);
  let start = -1;
  while (arr.length > 1) {
    const end = (start + k) % arr.length;
    arr.splice(end, 1);
    start = end - 1;
    console.log(arr);
  }
  return arr[0];
};