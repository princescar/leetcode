/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  const n = grid.length;
  if (grid[0][0] === 1) return -1;

  let cells = [0], ans = 1;
  while (cells.length > 0) {
    for (const x of cells) {
      const i = Math.floor(x / n), j = x % n;
      if (i === n - 1 && j === n - 1) return ans;
      grid[i][j] = ans;
    }
    ans++;
    const next = new Set();
    for (const x of cells) {
      const i = Math.floor(x / n), j = x % n;
      if (i > 0 && grid[i - 1][j] === 0) next.add((i - 1) * n + j);
      if (i < n - 1 && grid[i + 1][j] === 0) next.add((i + 1) * n + j);
      if (j > 0 && grid[i][j - 1] === 0) next.add(i * n + (j - 1));
      if (j < n - 1 && grid[i][j + 1] === 0) next.add(i * n + (j + 1));
      if (i > 0 && j > 0 && grid[i - 1][j - 1] === 0) next.add((i - 1) * n + (j - 1));
      if (i < n - 1 && j < n - 1 && grid[i + 1][j + 1] === 0) next.add((i + 1) * n + (j + 1));
      if (i > 0 && j < n - 1 && grid[i - 1][j + 1] === 0) next.add((i - 1) * n + (j + 1));
      if (i < n - 1 && j > 0 && grid[i + 1][j - 1] === 0) next.add((i + 1) * n + (j - 1));
    }
    cells = [...next];
  }
  return -1;
};