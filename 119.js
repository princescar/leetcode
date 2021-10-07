/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const row = [1];
  for (let i = 0; i < rowIndex; i++) {
    let prev = 1;
    for (let j = 1; j < row.length; j++) {
      const curr = row[j - 1] + row[j];
      row[j - 1] = prev;
      prev = curr;
    }
    row[row.length - 1] = prev;
    row.push(1);
  }
  return row;
};