/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  const m = board.length, n = board[0].length;
  let hShips = vShips = singleShip = 0;
  let shipSize = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        board[i][j] === 'X' &&
        (i === 0 || board[i - 1][j] !== 'X') &&
        (i === m - 1 || board[i + 1][j] !== 'X')
      ) {
        shipSize++;
      } else if (shipSize > 0) {
        hShips++;
        if (shipSize === 1) singleShip++;
        shipSize = 0;
      }
    }
    if (shipSize > 0) {
      hShips++;
      if (shipSize === 1) singleShip++;
      shipSize = 0;
    }
  }

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      if (
        board[i][j] === 'X' &&
        (j === 0 || board[i][j - 1] !== 'X') &&
        (j === n - 1 || board[i][j + 1] !== 'X')
      ) {
        shipSize++;
      } else if (shipSize > 0) {
        vShips++;
        if (shipSize === 1) singleShip++;
        shipSize = 0;
      }
    }
    if (shipSize > 0) {
      vShips++;
      if (shipSize === 1) singleShip++;
      shipSize = 0;
    }
  }

  return hShips + vShips - singleShip / 2;
};