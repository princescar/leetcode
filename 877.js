/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
  const dp = [];
  return play(0, piles.length -1) > 0;
  function play(start, end) {
    if (start === end) return piles[start];
    if (dp[start] && dp[start][end] != null) return dp[start][end];
    const s1 = piles[start] - play(start + 1, end);
    const s2 = piles[end] - play(start, end - 1);
    const s = Math.max(s1, s2);
    if (!dp[start]) dp[start] = [];
    dp[start][end] = s;
    return s;
  }
};