/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const solutions = solve([]);
  return solutions.map(queens =>
    queens.map(j =>
      '.'.repeat(j) + 'Q' + '.'.repeat(n - j - 1)
    )
  );

  function solve(queens) {
    const i = queens.length;
    if (i === n) return [queens];

    const result = [];
    for (let j = 0; j < n; j++) {
      if (
        !queens.includes(j) &&
        queens.every((y, x) => i + j !== x + y) &&
        queens.every((y, x) => i - x !== j - y)
      )
        result.push(...solve([...queens, j]));
    }
    return result;
  }
};