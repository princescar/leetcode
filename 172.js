/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  const map = [,,,,,1];
  let c5 = 0;
  for (let i = 5; i <= n; i++) c5 += count5(i);
  return c5;

  function count5(x) {
    if (x % 5 !== 0) return 0;
    if (map[x]) return map[x];
    return count5(x / 5) + 1;
  }
};