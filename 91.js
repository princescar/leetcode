/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const dp = [];
  return decode(s);

  function decode(x) {
    if (x.length === 0) return 1;
    if (x[0] == 0) return 0;
    if (dp[x] != null) return dp[x];
    let r = decode(x.substring(1));
    if (x.length > 1) {
      const y = x.substring(0, 2);
      if (y > 0 && y <= 26) r+= decode(x.substring(2));
    }
    dp[x] = r;
    return r;
  }
};