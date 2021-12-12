/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
  const matrix = new Array(bombs.length).fill(0).map(() => []);
  for (let i = 0; i < bombs.length; i++) {
    for (let j = 0; j < bombs.length; j++) {
      matrix[i][j] = canIgnite(bombs[i], bombs[j]);
    }
  }
  let ans = 0;
  for (let i = 0; i < bombs.length; i++) {
    const set = new Set();
    ignite(i, set);
    ans = Math.max(ans, set.size);
    if (ans === bombs.length) break;
  }
  return ans;

  function ignite(i, set) {
    set.add(i);
    for (let j = 0; j < bombs.length; j++) {
      if (matrix[i][j] && !set.has(j)) ignite(j, set);
    }
  }

  function canIgnite([x1, y1, r1], [x2, y2]) {
    const x = Math.abs(x1 - x2), y = Math.abs(y1 - y2);
    const r = Math.sqrt(x * x + y * y);
    return r <= r1;
  }
};