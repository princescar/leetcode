/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  const [l1, b1, r1, t1] = rec1;
  const [l2, b2, r2, t2] = rec2;
  return !(l1 >= r2 || l2 >= r1 || b1 >= t2 || b2 >= t1);
};