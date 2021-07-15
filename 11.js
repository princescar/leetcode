/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0;
  let h = Math.max(...height);
  while(h > 0) {
    let l = 0;
    while(height[l] < h) l++;
    let r = height.length - 1;
    while(height[r] < h && r > l) r--;
    if (l < r) {
      const area = (r - l) * h;
      if (area > maxArea) {
        maxArea = area;
      }
    }
    h--;
  }
  return maxArea;
};
