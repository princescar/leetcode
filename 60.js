/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const fact = [,1,2,6,24,120,720,5040,40320,362880];
  const nums = new Array(n).fill(0).map((_,i) => i + 1);

  let result = '';
  k--;
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(k / fact[i]);
    result += nums.splice(j, 1);
    k = k % fact[i];
  }
  result += nums.splice(0, 1);
  return result;
};