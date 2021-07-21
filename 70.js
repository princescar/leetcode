const cache = [, 1, 2];

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  return c(n);

  function c(x) {
    if (cache[x]) return cache[x];
    const r = c(x - 1) + c(x - 2);
    cache[x] = r;
    return r;
  }
};