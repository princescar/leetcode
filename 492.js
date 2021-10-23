/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  const x = Math.ceil(Math.sqrt(area));
  for (let l = x; l <= area; l++) {
    const w = area / l;
    if (Number.isInteger(w)) {
      return [l, w];
    }
  }
};