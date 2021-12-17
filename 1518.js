/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  let ans = numBottles, empty = numBottles;
  while (empty >= numExchange) {
    const full = Math.floor(empty / numExchange);
    ans += full;
    empty = full + empty % numExchange;
  }
  return ans;
};