/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const dpCut = [], dpPali = [];
  return cut(0);

  function cut(start) {
    if (dpCut[start] != null) return dpCut[start];
    let min = Infinity;
    let end = s.lastIndexOf(s[start]);
    while (start <= end) {
      if (pali(start, end)) {
        if (end === s.length - 1) {
          min = 0;
          break;
        } else {
          const count = 1 + cut(end + 1);
          if (count < min) min = count;
        }
      }
      if (end === 0) break;
      end = s.lastIndexOf(s[start], end - 1);
    }
    dpCut[start] = min;
    return min;
  }

  function pali(start, end) {
    if (!dpPali[start]) dpPali[start] = [];
    if (dpPali[start][end] != null)
      return dpPali[start][end];
    const r = start >= end ||
      s[start] === s[end] && pali(start + 1, end - 1);
    dpPali[start][end] = r;
    return r;
  }
};