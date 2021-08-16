/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length;
  for (let x = 0; x < Math.floor(n / 2); x++) {
    const y = n - 1 - x;
    const len = y - x;
    for (let i = 0; i < len; i++) {
      const temp = matrix[x][x + i];
      matrix[x][x + i] = matrix[y - i][x];
      matrix[y - i][x] = matrix[y][y - i];
      matrix[y][y - i] = matrix[x + i][y];
      matrix[x + i][y] = temp;
    }
  }
};