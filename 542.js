/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const m = mat.length, n = mat[0].length;
  const ans = new Array(m).fill(0).map(() => []);
  let edge = new Set();
  for (let r = 0; r < m; r++)
    for (let c = 0; c < n; c++)
      if (mat[r][c] === 0)
        edge.add(r * n + c);
  let dist = 0;
  while (edge.size) {
    for (const x of edge) {
      const r = Math.floor(x / n), c = x % n;
      ans[r][c] = dist;
    }
    const next = new Set();
    for (const x of edge) {
      const r = Math.floor(x / n), c = x % n;
      if (r > 0 && ans[r - 1][c] == null) next.add(x - n);
      if (r < m - 1 && ans[r + 1][c] == null) next.add(x + n);
      if (c > 0 && ans[r][c - 1] == null) next.add(x - 1);
      if (c < n - 1 && ans[r][c + 1] == null) next.add(x + 1);
    }
    edge = next;
    dist++;
  }

  return ans;
};