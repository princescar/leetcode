/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
  items.sort((a, b) => a[0] - b[0]);
  const map = [0];
  let max = 0;
  for (const [p, b] of items) {
    map[p] = max;
    if (b > max) map[p] = max = b;
  }
  return queries.map(p => {
    let i = p;
    while (map[i] == null) i--;
    return map[i];
  });
};