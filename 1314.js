/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
  const m = mat.length, n = mat[0].length;
  const ans = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      for (let r = Math.max(0, i - k); r <= Math.min(i + k, m - 1); r++)
        for (let c = Math.max(0, j - k); c <= Math.min(j + k, n - 1); c++)
          ans[r][c] += mat[i][j];
  return ans;
};