/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
  const n = grid.length;
  const islandSizes = [];
  let islandIndex = 2;

  let maxSize = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        const islands = slibingIslands(i, j);
        const size = islands.reduce((s, x) => s + islandSizes[x], 1);
        if (size > maxSize) maxSize = size;
      }
    }
  }

  return maxSize || n * n;

  function slibingIslands(i, j) {
    const islands = new Set();
    for (let [x, y] of slibingCells(i, j)) {
      if (grid[x][y] > 0) {
        if (grid[x][y] === 1) exploreIsland(x, y);
        islands.add(grid[x][y]);
      }
    }
    return [...islands];
  }

  function exploreIsland(si, sj) {
    let size = 0;
    let edges = new Set([si * n + sj]);
    while (edges.size > 0) {
      size += edges.size;
      const newEdges = new Set();
      for (let edge of edges) {
        const i = Math.floor(edge / n), j = edge % n;
        grid[i][j] = islandIndex;
        for (let [x, y] of slibingCells(i, j)) {
          if (grid[x][y] === 1) {
            newEdges.add(x * n + y);
          }
        }
      }
      edges = newEdges;
    }
    islandSizes[islandIndex++] = size;
  }

  function slibingCells(i, j) {
    const cells = [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]];
    return cells.filter(([x, y]) => x >= 0 && x < n && y >= 0 && y < n);
  }
};