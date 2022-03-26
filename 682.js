/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let ans = 0, pts = [];
  for (const op of ops) {
    if (op === '+') {
      const pt = pts[pts.length - 1] + pts[pts.length - 2];
      pts.push(pt);
      ans += pt;
    } else if (op === 'D') {
      const pt = pts[pts.length - 1] * 2;
      pts.push(pt);
      ans += pt;
    } else if (op === 'C') {
      ans -= pts.pop();
    } else {
      const pt = parseInt(op);
      pts.push(pt);
      ans += pt;
    }
  }
  return ans;
};