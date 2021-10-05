/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  if (x < 10) return true;
  let y = 10;
  while (Math.floor(x / y) > 9) y *= 10;
  let z = 10;
  while (y >= z) {
    const d1 = Math.floor((x % (y * 10)) / y), d2 = Math.floor((x % z) / (z / 10));
    if (d1 !== d2) return false;
    z *= 10;
    y /= 10;
  }
  return true;
};