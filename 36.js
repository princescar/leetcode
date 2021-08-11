/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    const col = new Set();
    const box = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        if (row.has(board[i][j])) return false;
        else row.add(board[i][j]);
      }
      if (board[j][i] !== '.') {
        if (col.has(board[j][i])) return false;
        else col.add(board[j][i]);
      }
      const x1 = Math.floor(i / 3), y1 = i % 3;
      const x2 = Math.floor(j / 3), y2 = j % 3;
      const x = x1 * 3 + x2, y = y1 * 3 + y2;
      if (board[x][y] !== '.') {
        if (box.has(board[x][y])) return false;
        else box.add(board[x][y]);
      }
    }
  }
  return true;
};