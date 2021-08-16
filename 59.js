/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const matrix = new Array(n).fill(0).map(() => []);
  const half = Math.floor(n / 2);
  let x = 1;
  for (let k = 0; k < half; k++) {
    const top = left = k, bottom = right = n - 1 - k;
    for (let j = left; j < right; j++) matrix[top][j] = x++;
    for (let i = top; i < bottom; i++) matrix[i][right] = x++;
    for (let j = right; j > left; j--) matrix[bottom][j] = x++;
    for (let i = bottom; i > top; i--) matrix[i][left] = x++;
  }
  if (n % 2) matrix[half][half] = x;
  return matrix;
};
