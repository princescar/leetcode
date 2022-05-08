/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  if (!bank.includes(end)) return -1;
  const set = new Set();
  let ans = 0, current = new Set([start]);
  while (current.size > 0) {
    if (current.has(end)) return ans;
    for (const x of current) set.add(x);
    const next = new Set();
    for (const y of bank) {
      if (set.has(y)) continue;
      for (const x of current)
        if (diff(x, y) === 1) next.add(y);
    }
    current = next;
    ans++;
  }
  return -1;

  function diff(x, y) {
    let cnt = 0;
    for (let i = 0; i < 8; i++)
      if (x[i] !== y[i]) cnt++;
    return cnt;
  }
};
