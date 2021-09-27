/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dp = [];
  return wb(s);

  function wb(s) {
    if (s === '') return true;
    if (dp[s] == null) {
      for (const word of wordDict) {
        const index = s.indexOf(word);
        if (
          index >= 0 &&
          wb(s.substring(0, index)) &&
          wb(s.substring(index + word.length))
        ) {
          dp[s] = true;
          break;
        }
      }
      dp[s] = !!dp[s];
    }
    return dp[s];
  }
};