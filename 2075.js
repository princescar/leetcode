/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
  const columns = encodedText.length / rows;
  const matrix = new Array(rows).fill(0).map(() => new Array(columns));
  for (let i = 0; i < encodedText.length; i++) {
    const r = Math.floor(i / columns), c = i % columns;
    matrix[r][c] = encodedText[i];
  }
  const arr = [];
  let offset = 0;
  while (offset < columns) {
    for (let i = 0; i < rows && i + offset < columns; i++)
      arr.push(matrix[i][i + offset]);
    ++offset;
  }
  const str = arr.join('');
  return str.trimEnd();
};