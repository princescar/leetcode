/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const dp = [];
  return match(0, 0);

  function match(si, pi) {
    if (pi === p.length) return si === s.length;
    if (!dp[si]) dp[si] = [];
    if (dp[si][pi] != null) return dp[si][pi];

    let result = false;
    if (p[pi] === '?') {
      result = match(si + 1, pi + 1);
    } else if (p[pi] === '*') {
      for (let i = si; i <= s.length; i++) {
        if (match(i, pi + 1)) {
          result = true;
          break;
        }
      }
    } else {
      result = s[si] === p[pi] && match(si + 1, pi + 1);
    }

    dp[si][pi] = result;
    return result;
  }
};