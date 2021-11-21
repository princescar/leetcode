/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
  const min = [];
  let maxLen = 0;
  for (let i = 0; i < colors.length; i++) {
    const c = colors[i];
    if (min[c] == null) min[c] = i;
    for (let j = 0; j <= 100; j++) {
      if (j === c || min[j] == null) continue;
      maxLen = Math.max(maxLen, i - min[j]);
    }
  }
  return maxLen;
};