/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const dp = {};
  return distance(word1, word2);

  function distance(w1, w2) {
    const [a, b] = w1.length > w2.length ? [w1, w2] : [w2, w1];
    if (a.indexOf(b) >= 0) return a.length - b.length;

    if (!dp[a]) dp[a] = {};
    if (dp[a][b] != null) return dp[a][b];

    let min = a.length;
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (b[i] === a[j]) {
          const d1 = distance(a.substring(0, j), b.substring(0, i));
          const d2 = distance(a.substring(j + 1), b.substring(i + 1));
          if (d1 + d2 < min) min = d1 + d2;
          if (min === 0) return 0;
        }
      }
    }
    dp[a][b] = min;
    return min;
  }
};