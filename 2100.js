/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
  const left = [0];
  for (let i = 1; i < security.length; i++) {
    left[i] = security[i] <= security[i - 1] ? left[i - 1] + 1 : 0;
  }
  const right = [];
  right[security.length - 1] = 0;
  for (let i = security.length - 2; i >= 0; i--) {
    right[i] = security[i] <= security[i + 1] ? right[i + 1] + 1 : 0;
  }
  const ans = [];
  for (let i = 0; i < security.length; i++) {
    if (left[i] >= time && right[i] >= time) ans.push(i);
  }
  return ans;
};