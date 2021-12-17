/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  return numBottles + exchange(numBottles);

  function exchange(bottles) {
    if (bottles < numExchange) return 0;
    const full = Math.floor(bottles / numExchange);
    const empty = full + bottles % numExchange;
    return full + exchange(empty);
  }
};