/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let l = 0, r = m * n - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const i = Math.floor(mid / n), j = mid % n;
    if (matrix[i][j] === target) return true;
    else if (matrix[i][j] < target) l = mid + 1;
    else r = mid - 1;
  }
  return false;
};