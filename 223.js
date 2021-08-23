/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const area = (x1, y1, x2, y2) => (x2 - x1) * (y2 - y1);
  const size1 = area(ax1, ay1, ax2, ay2);
  const size2 = area(bx1, by1, bx2, by2);
  if (ax1 >= bx2 || bx1 >= ax2) return size1 + size2;
  if (ay1 >= by2 || by1 >= ay2) return size1 + size2;
  const x1 = Math.max(ax1, bx1), x2 = Math.min(ax2, bx2);
  const y1 = Math.max(ay1, by1), y2 = Math.min(ay2, by2);
  const size3 = area(x1, y1, x2, y2);
  return size1 + size2 - size3;
};