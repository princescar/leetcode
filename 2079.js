/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
  let i = 0, ans = 0;
  while (i < plants.length) {
    let sum = 0, j = i;
    while (j < plants.length) {
      sum += plants[j];
      if (sum > capacity) break;
      else j++;
    }
    ans += j;
    if (j < plants.length) ans += j;
    i = j;
  }
  return ans;
};