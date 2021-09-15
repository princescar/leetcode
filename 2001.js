/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
  const map = new Map();
  let count = 0;
  for (const [w, h] of rectangles) {
    const ratio = w / h;
    let c = map.get(ratio);
    if (c == null) {
      map.set(ratio, 1);
    } else {
      count += c;
      map.set(ratio, c + 1);
    }
  }
  return count;
};