/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = [0];
  const count = change(amount);
  return count === Infinity ? -1 : count;

  function change(amount) {
    if (dp[amount] == null) {
      let min = Infinity;
      for (const coin of coins) {
        const remain = amount - coin;
        if (remain >= 0)
          min = Math.min(min, 1 + change(remain));
      }
      dp[amount] = min;
    }
    return dp[amount];
  }
};