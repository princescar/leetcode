/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const r = [[,-1]];
  for (const [start, end] of intervals) {
    const last = r[r.length - 1][1];
    if (start > last) r.push([start, end]);
    else if (end > last) r[r.length - 1][1] = end;
  }
  r.shift();
  return r;
};