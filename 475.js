/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);
  heaters.unshift(-Infinity);
  heaters.push(Infinity);
  let ans = 0;
  let i = 0, j = 0;
  while (i < houses.length && j < heaters.length - 1) {
    if (houses[i] >= heaters[j + 1]) {
      j++;
    } else {
      const r = Math.min(houses[i] - heaters[j], heaters[j + 1] - houses[i]);
      ans = Math.max(ans, r);
      i++;
    }
  }
  return ans;
};