/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  let ma = m, mb = n;
  for (const [a, b] of ops) {
    if (a < ma) ma = a;
    if (b < mb) mb = b;
  }
  return ma * mb;
};