/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
  let min = Infinity;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[0]) {
      let j = i, k = 0, count = 1;
      while (k < b.length) {
        if (j === a.length) {
          count++;
          j = 0;
        }
        if (a[j] !== b[k]) {
          count = Infinity;
          break;
        }
        j++;
        k++;
      }
      min = Math.min(min, count);
    }
  }
  return min === Infinity ? -1 : min;
};