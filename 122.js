/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const p = prices[i] - prices[i - 1];
    if (p > 0) profit += p;
  }
  return profit;
};