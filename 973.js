/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  const d = ([x, y]) => x * x + y * y;
  return points.sort((a, b) => d(a) - d(b)).slice(0, k);
};