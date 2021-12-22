/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const m = board.length, n = board[0].length;
  for (let i = 0; i < m; i++) dfs(i, 0);
  for (let i = 0; i < m; i++) dfs(i, n - 1);
  for (let i = 0; i < n; i++) dfs(0, i);
  for (let i = 0; i < n; i++) dfs(m - 1, i);

  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      if (board[i][j] === 'O')
        board[i][j] = 'X';
  
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      if (board[i][j] === 'C')
        board[i][j] = 'O';
  
  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n) return;
    if (board[i][j] !== 'O') return;
    board[i][j] = 'C';
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
};