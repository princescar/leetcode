/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  const map = [0, 1];
  let max = 0;
  for (let i = 1; i <= n; i += 2) {
    const a = gen(i);
    if (a > max) max = a;
  }
  return max;

  function gen(x) {
    if (map[x] != null) return map[x];
    if (x % 2) {
      const i = Math.floor(x / 2);
      return gen(i) + gen(i + 1);
    } else {
      return gen(x >> 1);
    }
  }
};