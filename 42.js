/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let max = 0;
  for (let i = 1; i < height.length; i++) {
    if (height[i] > height[max]) max = i;
  }

  let result = 0;
  let edge = 0, temp = 0;
  for (let i = 0; i <= max; i++) {
    if (height[i] < edge) {
      temp += edge - height[i];
    } else {
      result += temp;
      temp = 0;
      edge = height[i];
    }
  }
  edge = 0;
  temp = 0;
  for (let i = height.length - 1; i >= max; i--) {
    if (height[i] < edge) {
      temp += edge - height[i];
    } else {
      result += temp;
      temp = 0;
      edge = height[i];
    }
  }
  return result;
};