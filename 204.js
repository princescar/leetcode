/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0;
  const notPrimes = [];
  for(let i = 2; i < n; i++) {
    if(!notPrimes[i]) {
      count++;
      for(let j = i * 2; j < n; j += i) {
        notPrimes[j] = true;
      }
    }
  }
  return count;
};