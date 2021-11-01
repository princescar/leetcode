/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  const set = new Set();
  for (const x of candyType) set.add(x);
  return Math.min(set.size, candyType.length / 2);
};