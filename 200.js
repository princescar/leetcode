/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const m = grid.length, n = grid[0].length;
  const island = new Array(m).fill(0).map(() => []);
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!island[i][j] && grid[i][j] === '1') {
        ans++;
        dfs(i, j);
      }
    }
  }
  return ans;

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    if (island[i][j]) return;
    if (grid[i][j] === '0') return;
    island[i][j] = ans;
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
};