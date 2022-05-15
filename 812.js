/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
  let ans = 0;
  for (let i = 0; i < points.length; i++)
    for (let j = 0; j < points.length; j++)
      for (let k = 0; k < points.length; k++)
        ans = Math.max(ans, area(points[i], points[j], points[k]));
  return ans;

  function area([x1, y1], [x2, y2], [x3, y3]) {
    return (x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2) / 2;
  }
};
