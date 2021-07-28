const primes = [0,0,1,1,0,1,0,1];
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  function p(x) {
    if (x % 2 === 0) primes[x] = 0;
    p(x - 1);
  }
};