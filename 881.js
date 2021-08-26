/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b);
  let boat = 0;
  let l = 0, r = people.length - 1;
  while (l <= r) {
    boat++;
    if (people[l] + people[r] <= limit) l++;
    r--;
  }
  return boat;
};