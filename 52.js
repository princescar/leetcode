/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let count = 0;
  solve([]);
  return count;

  function solve(queens) {
    const i = queens.length;
    if (i === n) {
      count++;
    } else {
      for (let j = 0; j < n; j++) {
        if (
          !queens.includes(j) &&
          queens.every((y, x) => i + j !== x + y) &&
          queens.every((y, x) => i - x !== j - y)
        )
          solve([...queens, j]);
      }
    }
  }
};