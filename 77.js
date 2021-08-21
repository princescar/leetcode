/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  let xor = 0;
  if (k > n / 2) {
    k = n - k;
    xor = 1;
  }
  const masks = [];
  c(0, 0, 0);
  const result = [];
  for (const mask of masks) {
    const item = [];
    for (let i = 1; i <= n; i++) {
      if (((mask >>> (i - 1)) & 1) ^ xor) item.push(i);
    }
    result.push(item);
  }
  return result;

  function c(count, last, mask) {
    if (count === k) {
      masks.push(mask);
    } else {
      for (let i = last + 1; i <= n; i++) {
        c(count + 1, i, mask | (1 << (i - 1)))
      }
    }
  }
};

console.time()
console.log(combine(20,20));
console.timeEnd();