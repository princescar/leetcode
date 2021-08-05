/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
  const dist = [];
  for (let i = 0; i < n; i++) dist[i] = [];
  for (let [u, v, w] of times) dist[u - 1][v - 1] = w;

  while (true) {
    let changed = false;
    for (let i = 0; i < n; i++) {
      if (i != k - 1 && dist[k - 1][i] != null) {
        for (let j = 0; j < n; j++) {
          if (j != k - 1 && dist[i][j] != null) {
            const d = dist[k - 1][i] + dist[i][j];
            if (dist[k - 1][j] == null || d < dist[k - 1][j]) {
              dist[k - 1][j] = d;
              changed = true;
            }
          }
        }
      }
    }
    if (!changed) break;
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    if (i == k - 1) continue;
    const d = dist[k - 1][i];
    if (d == null) return -1;
    if (d > max) max = d;
  }
  return max;
};