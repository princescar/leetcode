/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let l = -1, r = -1;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > newInterval[0]) {
      l = i - 1;
      r = i;
      break;
    }
  }
  if (r < 0) l = intervals.length - 1;
  while (l >= 0 && intervals[l][1] >= newInterval[0]) {
    newInterval[0] = Math.min(intervals[l][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[l][1], newInterval[1]);
    intervals.splice(l, 1);
    l--;
    r--;
  }
  if (r >= 0) {
    while (r < intervals.length && intervals[r][0] <= newInterval[1]) {
      newInterval[0] = Math.min(intervals[r][0], newInterval[0]);
      newInterval[1] = Math.max(intervals[r][1], newInterval[1]);
      intervals.splice(r, 1);
    }
  }
  intervals.splice(l + 1, 0, newInterval);
  return intervals;
};