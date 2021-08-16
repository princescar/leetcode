/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const r = [];
  let inserted = false;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < newInterval[0]) {
      r.push(intervals[i]);
    } else if (intervals[i][0] > newInterval[1]) {
      if (!inserted) {
        r.push(newInterval);
        inserted = true;
      }
      r.push(intervals[i]);
    } else {
      newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
      newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    };
  }
  if (!inserted) {
    r.push(newInterval);
  }
  return r;
};