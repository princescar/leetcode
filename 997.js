/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  const matrix = new Array(n + 1).fill(false).map(() => new Array(n + 1).fill(false));
  for (const [a, b] of trust) matrix[a][b] = true;
  for (let i = 1; i <= n; i++) {
    let trustNobody = true;
    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      if (matrix[i][j]) {
        trustNobody = false;
        break;
      }
    }
    if (trustNobody) {
      let beTrusted = true;
      for (let j = 1; j <= n; j++) {
        if (i === j) continue;
        if (!matrix[j][i]) {
          beTrusted = false;
          break;
        }
      }
      if (beTrusted) return i;
    }
  }
  return -1;
};