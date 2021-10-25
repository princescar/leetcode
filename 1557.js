/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
  const flag = [];
  for (const [, to] of edges) flag[to] = true;
  const ans = [];
  for (let i = 0; i < n; i++) if (!flag[i]) ans.push(i);
  return ans;
};