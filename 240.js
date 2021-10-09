/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length; n = matrix[0].length;
  return search(0, 0, m - 1, n - 1);

  function search(r1, c1, r2, c2) {
    if (target < matrix[r1][c1] || target > matrix[r2][c2]) return false;
    const rlen = r2 - r1 + 1, clen = c2 - c1 + 1;
    const len = Math.max(rlen, clen);
    let l = 0, r = len - 1;
    while (l <= r) {
      const i = Math.floor((l + r) / 2);
      const rk = Math.floor(i * rlen / len), ck = Math.floor(i * clen / len);
      const x = r1 + rk, y = c1 + ck;
      if (matrix[x][y] > target) r = i - 1;
      else if (matrix[x][y] < target) l = i + 1;
      else return true;
    }
    const rk = Math.floor(l * rlen / len), ck = Math.floor(l * clen / len);
    return search(r1, c1 + ck, r1 + rk - 1, c2) ||
      search(r1 + rk, c1, r2, c1 + ck - 1);
  }
};