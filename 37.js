/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const rows = new Array(9).fill(0).map(() => []),
    cols = new Array(9).fill(0).map(() => []),
    boxs = new Array(9).fill(0).map(() => []);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const n = board[i][j];
      if (n !== '.') rows[i][n] = cols[j][n] = boxs[k][n] = true;
    }
  }
  solve();

  function solve() {
    let x = -1, y = -1;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '.') {
          x = i;
          y = j;
          break;
        }
      }
    }
    if (x < 0 || y < 0) return true;

    const k = Math.floor(x / 3) * 3 + Math.floor(y / 3);
    for (let n = 1; n <= 9; n++) {
      if (!rows[x][n] && !cols[y][n] && !boxs[k][n]) {
        board[x][y] = '' + n;
        rows[x][n] = cols[y][n] = boxs[k][n] = true;
        if (solve()) return true;
        board[x][y] = '.';
        rows[x][n] = cols[y][n] = boxs[k][n] = false;
      }
    }
    return false;
  }
};