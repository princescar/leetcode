/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
  let ans = 0;
  for (let i = 0; i < values.length; i++)
    for (let j = 1; j <= 1000 && i + j < values.length; j++)
      ans = Math.max(ans, values[i] + values[i + j] - j);
  return ans;
};