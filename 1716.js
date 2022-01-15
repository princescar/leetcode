/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  let ans = base = 0;
  for (let i = 0; i < n; i++) {
    if (i % 7 === 0) base++;
    ans += base + (i % 7);
  }
  return ans;
};