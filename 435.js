/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let tail = -Infinity, ans = 0;
  for (const [start, end] of intervals) {
    if (start >= tail) {
      tail = end;
    } else {
      tail = Math.min(tail, end);
      ans++;
    }
  }
  return ans;
};