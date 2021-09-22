/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  const m = mat.length; n = mat[0].length;
  if (r * c !== m * n) return mat;
  c = Math.ceil(m * n / r);
  const ans = new Array(r).fill(0).map(() => new Array(c));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const x = i * n + j;
      const k = Math.floor(x / c), l = x % c;
      ans[k][l] = mat[i][j];
    }
  }
  return ans;
};