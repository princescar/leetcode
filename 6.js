/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (!s) return s;

  const chars = [];
  for (let i = 0; i < numRows; i++) {
    chars[i] = [];
  }

  for (let i = 0; i < s.length; i++) {
    const j = selectRow(i);
    chars[j].push(s[i]);
  }

  const result = chars.map(row => row.join('')).join('');
  return result;

  function selectRow(i) {
    let partSize = numRows + (numRows - 2);
    if (partSize === 0) {
      partSize = 1;
    }
    const index = i % partSize;
    if (index < numRows) {
      return index;
    } else {
      return 2 * numRows - index - 2;
    }
  }
};
