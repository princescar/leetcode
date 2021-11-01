/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
  events.sort((a, b) => b[2] - a[2]);
  const dp = [];
  return pick(0, 0, 0);

  function pick(start, count) {
    if (count === 2) return 0;
    if (!dp[start]) dp[start] = [];
    if (dp[start][count] == null) {
      let max = 0;
      for (const event of events) {
        if (event[0] > start) {
          max = Math.max(max, pick(event[1], count + 1) + event[2]);
          if (count === 1) break;
        }
      }
      dp[start][count] = max;
    }
    return dp[start][count];
  }
};