/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  let ans = 0;
  const n = grid.length;

  // Top
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (grid[i][j] > 0) ans++;

  // Front
  for (let j = 0; j < n; j++) {
    let max = 0;
    for (let i = 0; i < n; i++)
      max = Math.max(max, grid[i][j]);
    ans += max;
  }

  // Side
  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j < n; j++)
      max = Math.max(max, grid[i][j]);
    ans += max;
  }

  return ans;
};
