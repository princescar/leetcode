/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const m = grid.length, n = grid[0].length;
  let edge = new Set(), count = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1) count++;
      else if (grid[r][c] === 2) edge.add(r * n + c);
    }
  }
  if (count === 0) return 0;
  let time = 0;
  while (edge.size) {
    const next = new Set();
    for (const x of edge) {
      const r = Math.floor(x / n), c = x % n;
      grid[r][c] = 2;
    }
    for (const x of edge) {
      const r = Math.floor(x / n), c = x % n;
      if (r > 0 && grid[r - 1][c] === 1) next.add(x - n);
      if (r < m - 1 && grid[r + 1][c] === 1) next.add(x + n);
      if (c > 0 && grid[r][c - 1] === 1) next.add(x - 1);
      if (c < n - 1 && grid[r][c + 1] === 1) next.add(x + 1);
    }
    count -= next.size;
    edge = next;
    time++;
    if (count === 0) return time;
  }
  return -1;
};