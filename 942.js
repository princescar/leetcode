/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  const n = s.length;
  const set = new Set();
  let x = min = max = 0, ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(x);
    set.add(x);
    if (s[i] === 'I') {
      let y = x + 1;
      while (set.has(y)) y++;
      x = y;
    } else {
      let y = x - 1;
      while (set.has(y)) y--;
      x = y;
    }
    min = Math.min(min, x);
    max = Math.max(max, x);
  }
  ans.push(x);
  if (min < 0) ans = ans.map(x => x + (0 - min));
  if (max > n) ans = ans.map(x => x - (max - n));
  return ans;
};
