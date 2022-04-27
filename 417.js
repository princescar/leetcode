/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  const m = heights.length, n = heights[0].length;

  // Pacific
  const pacific = new Array(m).fill(0).map(() => new Array(n).fill(false));
  let edges = new Set();
  // Left
  for (let i = 0; i < m; i++) edges.add(i * n + 0);
  // Top
  for (let j = 0; j < n; j++) edges.add(0 * n + j);
  flood(pacific, edges);

  // Atlantic
  const atlantic = new Array(m).fill(0).map(() => new Array(n).fill(false));
  edges = new Set();
  // Right
  for (let i = 0; i < m; i++) edges.add(i * n + (n - 1));
  // Bottom
  for (let j = 0; j < n; j++) edges.add((m - 1) * n + j);
  flood(atlantic, edges);

  // Collect
  const ans = [];
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      if (pacific[i][j] && atlantic[i][j])
        ans.push([i, j]);
  return ans;

  function flood(flag, edges) {
    if (edges.size === 0) return;
    for (const x of edges) {
      const [i, j] = [Math.floor(x / n), x % n];
      flag[i][j] = true;
    }
    const newEdges = new Set();
    for (const x of edges) {
      const [i, j] = [Math.floor(x / n), x % n];
      const height = heights[i][j];
      climb(height, i - 1, j);
      climb(height, i + 1, j);
      climb(height, i, j - 1);
      climb(height, i, j + 1);
    }
    flood(flag, newEdges);

    function climb(height, i, j) {
      if (i < 0 || j < 0 || i >= m || j >= n) return;
      if (flag[i][j]) return;
      if (heights[i][j] < height) return;
      newEdges.add(i * n + j);
    }
  }
};
