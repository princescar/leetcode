/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  let ans = '';
  while (columnNumber > 0) {
    const i = (columnNumber - 1) % 26;
    ans = String.fromCharCode('A'.charCodeAt(0) + i) + ans;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }
  return ans;
};