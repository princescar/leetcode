/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let r = m - 1, c = 0;
  while (r >= 0 && c < n) {
    if (target < matrix[r][c]) r--;
    else if (target > matrix[r][c]) c++;
    else return true;
  }
  return false;
};