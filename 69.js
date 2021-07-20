const squares = [];
// 46341^2  = 2147488281
// 2^31 - 1 = 2147483647
for (let i = 0; i <= 46341; i++) squares[i] = i * i;

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let i = 0;
  for (; i < squares.length; i++) {
    if (squares[i] > x) break;
  }
  return i - 1;
};