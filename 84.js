/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
  return maxSize(0, heights.length - 1);

  function maxSize(l, r) {
    if (l > r) return 0;
    if (l === r) return heights[l];
    let min = Infinity, lowest = [];
    for (let i = l; i <= r; i++) {
      const h = heights[i];
      if (h < min) {
        min = h;
        lowest = [i];
      } else if (h === min) {
        lowest.push(i);
      }
    }
    let size = (r - l + 1) * min;
    if (lowest.length > 0) {
      lowest.unshift(l - 1);
      lowest.push(r + 1);
      for (let i = 1; i < lowest.length; i++) {
        const s = maxSize(lowest[i - 1] + 1, lowest[i] - 1);
        if (s > size) size = s;
      }
    }
    return size;
  }
};