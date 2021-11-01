/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function(s, queries) {
  const plates = [];
  let start = -1, end = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      if (start < 0) start = end = i;
      else end = i;
    } else if (start >= 0) {
      plates.push([start, end]);
      start = -1;
    }
  }
  if (start >= 0) plates.push([start, end]);
  const ans = [];
  for (const [start, end] of queries) {
    let count = 0;
    for (const [s, e] of plates) {
      if (s <= start) continue;
      if (e >= end) break;
      count += e - s + 1;
    }
    ans.push(count);
  }
  return ans;
};