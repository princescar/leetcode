/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
  let ans = 0;
  while(tickets[k] > 1) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i] > 0) {
        --tickets[i];
        ans++;
      }
    }
  }
  for (let i = 0; i <= k; i++) {
    if (tickets[i] > 0) ans++;
  }
  return ans;
};