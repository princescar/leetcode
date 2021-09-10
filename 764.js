/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
  const matrix = new Array(n).fill(1).map(() => new Array(n).fill(1));
  for (const [x, y] of mines) matrix[x][y] = 0;

  let largest = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let k = 0;
      while (
        i - k >= 0 && matrix[i - k][j] &&
        i + k < n && matrix[i + k][j] &&
        j - k >= 0 && matrix[i][j - k] &&
        j + k < n && matrix[i][j + k]
      ) k++;
      if (k > largest) largest = k;
    }
  }

  return largest;
};