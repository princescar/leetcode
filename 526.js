/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
  const nums = new Array(n).fill(0).map((_,i) => i + 1);
  let count = 0;
  arrange(n);
  return count;

  function arrange(x) {
    if (x === 1) {
      count++;
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      const y = nums[i];
      if (y % x === 0 || x % y === 0) {
        nums.splice(i, 1);
        arrange(x - 1);
        nums.splice(i, 0, y);
      }
    }
  }
};