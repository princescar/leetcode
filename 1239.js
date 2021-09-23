/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  return concat(0, []);

  function concat(start, mask) {
    if (start >= arr.length) return 0;
    let max = 0;
    const len = arr[start].length;
    let i = 0;
    while (i < len) {
      const ch = arr[start][i];
      if (mask[ch]) break;
      else mask[ch] = true;
      i++;
    }
    if (i === len) max = Math.max(max, len + concat(start + 1, mask));
    for (let j = 0; j < i; j++) mask[arr[start][j]] = false;
    max = Math.max(max, concat(start + 1, mask));
    return max;
  }
};