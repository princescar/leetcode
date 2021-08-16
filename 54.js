/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const m = matrix.length, n = matrix[0].length;
  const r = [];
  const x = Math.ceil(Math.min(m, n) / 2);
  for (let k = 0; k < x; k++) {
    const top = k, bottom = m - 1 - k,
      left = k, right = n - 1 - k;
    if (left === right) {
      for (let i = top; i <= bottom; i++) r.push(matrix[i][left]);
    } else if (top === bottom) {
      for (let j = left; j <= right; j++) r.push(matrix[top][j]);
    } else {
      for (let j = left; j < right; j++) r.push(matrix[top][j]);
      for (let i = top; i < bottom; i++) r.push(matrix[i][right]);
      for (let j = right; j > left; j--) r.push(matrix[bottom][j]);
      for (let i = bottom; i > top; i--) r.push(matrix[i][left]);
    }
  }
  return r;
};