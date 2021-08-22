/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
  const dist = (p1, p2) => Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
  const escape = dist([0,0], target);
  for (const x of ghosts) {
    if (dist(x, target) <= escape) return false;
  }
  return true;
};