/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
  let ans = 0, x = values[0];
  for (let i = 1; i < values.length; i++) {
    ans = Math.max(ans, x + values[i] - i);
    x = Math.max(x, values[i] + i);
  }
  return ans;
};