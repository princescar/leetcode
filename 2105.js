/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function(plants, capacityA, capacityB) {
  let ans = 0, a = capacityA, b = capacityB;
  for (let i = 0; i < Math.floor(plants.length / 2); i++) {
    if (a < plants[i]) {
      ans++;
      a = capacityA;
    }
    if (b < plants[plants.length - 1 - i]) {
      ans++;
      b = capacityB;
    }
    a -= plants[i];
    b -= plants[plants.length - 1 - i];
  }
  if (plants.length % 2) {
    const i = Math.floor(plants.length / 2);
    if (a >= b && a < plants[i] || a < b && b < plants[i]) ans++;
  }
  return ans;
};