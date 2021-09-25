/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const oldColor = image[sr][sc];
  if (oldColor !== newColor) fill(sr, sc);
  return image;

  function fill(r, c) {
    if (image[r][c] !== oldColor) return;
    image[r][c] = newColor;
    if (r > 0) fill(r - 1, c);
    if (c > 0) fill(r, c - 1);
    if (r < image.length - 1) fill(r + 1, c);
    if (c < image[0].length - 1) fill(r, c + 1);
  }
};