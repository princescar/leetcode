/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
  const sorted = [...arr].sort((a, b) => a - b);

  const count = new Map();
  for (let i = sorted.length - 1; sorted[i] >= 0; i--) {
    const x = sorted[i];
    if (count.get(x * 2) > 0) count.set(x * 2, count.get(x * 2) - 1);
    else if (count.get(x / 2) > 0) count.set(x / 2, count.get(x / 2) - 1);
    else count.set(x, (count.get(x) || 0) + 1);
  }
  for (let i = 0; sorted[i] < 0; i++) {
    const x = sorted[i];
    if (count.get(x * 2) > 0) count.set(x * 2, count.get(x * 2) - 1);
    else if (count.get(x / 2) > 0) count.set(x / 2, count.get(x / 2) - 1);
    else count.set(x, (count.get(x) || 0) + 1);
  }

  for (const c of count.values()) {
    if (c !== 0) return false;
  }
  return true;
};