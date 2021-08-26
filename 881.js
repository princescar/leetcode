/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b);
  let boat = 0;
  let l = 0, r = people.length - 1;
  while (l < r) {
    if (people[l] * 2 > limit) {
      boat += r - l + 1;
      break;
    }
    if (people[r] * 2 <= limit) {
      boat += Math.ceil((r - l + 1) / 2);
      break;
    }
    const w = people[l] + people[r];
    if (w <= limit) {
      boat++;
      l++;
      r--;
    } else {
      boat++;
      r--;
    }
  }
  if (l === r) boat++;
  return boat;
};