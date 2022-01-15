/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const set = new Set([0]);
  let count = 0;
  while (!set.has(amount)) {
    const add = new Set();
    for (const x of set)
      for (const y of coins)
        add.add(x + y);
    let min = Infinity;
    for (const x of add) {
      if (!set.has(x)) {
        set.add(x);
        min = Math.min(min, x);
      }
    }
    if (min > amount) return -1;
    count++;
  }
  return count;
};