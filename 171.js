/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let result = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const x = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
    result += x * Math.pow(26, columnTitle.length - 1 - i);
  }
  return result;
};