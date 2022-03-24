/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
  const m = img.length, n = img[0].length;
  const sum = new Array(m).fill(0).map(() => new Array(n).fill(0));
  const cnt = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      add(i, j);
  const ans = new Array(m).fill(0).map(() => []);
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      ans[i][j] = Math.floor(sum[i][j] / cnt[i][j]);
  return ans;

  function add(i, j) {
    const slibings = [
      [i - 1, j - 1],
      [i - 1, j],
      [i - 1, j + 1],
      [i, j - 1],
      [i, j],
      [i, j + 1],
      [i + 1, j - 1],
      [i + 1, j],
      [i + 1, j + 1],
    ];
    for (const [x, y] of slibings) {
      if (x >= 0 && y >=0 && x < m && y < n) {
        sum[x][y] += img[i][j];
        cnt[x][y]++;
      }
    }
  }
};
