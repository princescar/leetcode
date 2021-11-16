/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
  const map = new Map();
  let [left, bottom, right, top] = [Infinity, Infinity, -Infinity, -Infinity];
  let area = 0;
  for (const [l, b, r, t] of rectangles) {
    map.set(`${l},${b}`, (map.get(`${l},${b}`) || 0) + 1);
    map.set(`${l},${t}`, (map.get(`${l},${t}`) || 0) + 1);
    map.set(`${r},${b}`, (map.get(`${r},${b}`) || 0) + 1);
    map.set(`${r},${t}`, (map.get(`${r},${t}`) || 0) + 1);
    area += (r - l) * (t - b);
    left = Math.min(left, l);
    bottom = Math.min(bottom, b);
    right = Math.max(right, r);
    top = Math.max(top, t);
  }
  if (area !== (right - left) * (top - bottom)) return false;
  const vertex = [
    `${left},${bottom}`,
    `${left},${top}`,
    `${right},${bottom}`,
    `${right},${top}`,
  ];
  for (const p of vertex) {
    if (map.get(p) !== 1) return false;
  }
  for (const [p, count] of map) {
    if (!vertex.includes(p) && count !== 2 && count !== 4)
      return false;
  }
  return true;
};