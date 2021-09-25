/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const m = grid.length, n = grid[0].length;
  let max = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      max = Math.max(max, area(r, c));
    }
  }
  return max;

  function area(r, c) {
    if (grid[r][c] === 0) return 0;
    grid[r][c] = 0;
    let size = 1;
    if (r > 0) size += area(r - 1, c);
    if (c > 0) size += area(r, c - 1);
    if (r < m - 1) size += area(r + 1, c);
    if (c < n - 1) size += area(r, c + 1);
    return size;
  }
};