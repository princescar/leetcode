/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [[1]];
  for (let i = 1; i < numRows; i++) {
    const lastRow = result[i - 1];
    const row = [1];
    for (let j = 1; j < lastRow.length; j++) {
      row[j] = lastRow[j - 1] + lastRow[j];
    }
    row.push(1);
    result.push(row);
  }
  return result;
};