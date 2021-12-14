/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const ans = [0, 1];
  for (let i = 1; i < n; i++)
    ans.push(...[...ans].reverse().map(x => x | (1 << i)));
  return ans;
};