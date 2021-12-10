/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
  const count = new Array(10).fill(0);
  for (const d of digits) count[d]++;
  const ans = [];
  choose(0, 0);
  return ans;

  function choose(k, num) {
    if (k === 3) {
      ans.push(num);
      return;
    }

    for (let i = 0; i <= 9; i++) {
      if (count[i] <= 0) continue;
      if (k === 0 && i === 0) continue;
      if (k === 2 && i % 2) continue;
      count[i]--;
      choose(k + 1, num * 10 + i);
      count[i]++;
    }
  }
};