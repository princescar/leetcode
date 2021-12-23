/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const dp = [1];
  let p2 = p3 = p5 = 0;
  for (let i = 1; i < n; i++) {
    const n2 = dp[p2] * 2, n3 = dp[p3] * 3, n5 = dp[p5] * 5;
    const n = Math.min(n2, n3, n5);
    if (n === n2) p2++;
    if (n === n3) p3++;
    if (n === n5) p5++;
    dp[i] = n;
  }
  return dp[n - 1];
};
