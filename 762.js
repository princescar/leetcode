/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
  let ans = 0;
  for (let i = left; i <= right; i++)
    if(isPrime(setBits(i))) ans++;
  return ans;

  function setBits(x) {
    return x.toString(2).split('').filter(x => x === '1').length;
  }

  function isPrime(x) {
    return [2, 3, 5, 7, 11, 13, 17, 19].indexOf(x) > -1;
  }
};
