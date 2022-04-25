/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
  const arr = n.toString(2).split('');
  let i = 0;
  while (i < arr.length && arr[i] === '0') i++;
  let ans = 0, j = i + 1;
  while (j < arr.length) {
    if (arr[j] === '1') {
      ans = Math.max(ans, j - i);
      i = j;
    }
    j++;
  }
  return ans;
};
