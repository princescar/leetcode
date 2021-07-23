/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let low = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    const x = prices[i];
    if (x < low) {
      low = x;
    } else {
      const p = x - low;
      if (p > max) max = p;
    }
  }
  return max;
};