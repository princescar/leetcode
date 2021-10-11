/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
  const m = grid.length, n = grid[0].length;
  const arr = [];
  let sum = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      arr.push(grid[r][c]);
      sum += grid[r][c];
    }
  }
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    if (diff % x) return -1;
  }
  const ops = arr.map(x => x - arr[0]).map(y => y / x);
  let j = 1, y = ops.reduce((s, x) => s + x);
  for (let i = 1; i <= ops[ops.length - 1]; i++) {
    while (ops[j] < i) j++;
    const z = y + j - (ops.length - j);
    console.log(i, j, ops.length - j, z);
    if (z <= y) y = z;
    else return y;
  }
  return y;
};