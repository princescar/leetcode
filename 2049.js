/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function(parents) {
  const map = new Map();
  for (let i = 0; i < parents.length; i++) {
    if (map.has(parents[i])) map.get(parents[i]).push(i);
    else map.set(parents[i], [i]);
  }

  const sizes = [];
  count(0);

  let max = 0, maxCount = 0;
  for (let i = 0; i < parents.length; i++) {
    let product = 1;
    if (i !== 0) product *= sizes[0] - sizes[i];
    const children = map.get(i) || [];
    for (const child of children)
      product *= sizes[child];
    if (product > max) {
      max = product;
      maxCount = 1;
    } else if (product === max) {
      ++maxCount;
    }
  }
  return maxCount;

  function count(index) {
    if (sizes[index] == null) {
      sizes[index] = 1;
      const children = map.get(index) || [];
      for (const child of children)
        sizes[index] += count(child);
    }
    return sizes[index];
  }
};