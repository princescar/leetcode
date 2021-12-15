/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const cache = [1, 1];
  return num(n);

  function num(x) {
    if (cache[x] == null) {
      cache[x] = 0;
      for (let i = 0; i < x; i++)
        cache[x] += num(i) * num(x - i - 1);
    }
    return cache[x];
  }
};