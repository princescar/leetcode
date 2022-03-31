/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const ans = [];
  for (let i = left; i <= right; i++)
    if (selfDivide(i)) ans.push(i);
  return ans;

  function selfDivide(x) {
    const digits = String(x).split('').map(x => parseInt(x));
    for (const d of digits)
      if (x % d !== 0) return false;
    return true;
  }
};