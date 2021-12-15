/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
  const n = quiet.length;
  const poorer = new Array(n).fill(0).map(() => []);
  for (const [a, b] of richer) poorer[a].push(b);
  const sort = new Array(n).fill(0).map((_, i) => i)
    .sort((i1, i2) => quiet[i1] - quiet[i2]);
  const ans = [];
  for (const i of sort) quieter(i, i);
  return ans;

  function quieter(i, j) {
    if (ans[i] != null) return;
    ans[i] = j;
    for (const k of poorer[i]) quieter(k, j);
  }
};