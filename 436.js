/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  const map = new Map();
  for (let i = 0; i < intervals.length; i++)
    map.set(intervals[i][0], i);
  const arr = intervals.map(x => x[0]).sort((a, b) => a - b);
  const ans = [];
  for (const [, endi] of intervals) {
    if (map.has(endi)) {
      ans.push(map.get(endi));
    } else {
      const j = binarySearch(endi);
      if (j < 0) ans.push(-1);
      else ans.push(map.get(j));
    }
  }
  return ans;

  function binarySearch(x) {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);
      if (arr[mid] > x) r = mid - 1;
      else l = mid + 1;
    }
    return l < arr.length ? arr[l] : -1;
  }
};
