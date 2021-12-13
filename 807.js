/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  const n = grid.length;
  const h = [], v = [];
  for (let i = 0; i < n; i++) {
    h[i] = Math.max(...grid[i]);
    v[i] = Math.max(...grid.map(row => row[i]));
  }
  let ans = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      ans += Math.min(h[i], v[j]) - grid[i][j];
  return ans;
};