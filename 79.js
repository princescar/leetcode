/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length, n = board[0].length;
  const map = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      map.set(board[i][j], (map.get(board[i][j]) || 0) + 1);
    }
  }
  for (const ch of word) {
    if (!map.has(ch)) return false;
    const count = map.get(ch);
    if (count < 1) return false;
    map.set(ch, count - 1);
  }
  const visit = new Array(m).fill(0).map(() => []);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (search(i, j, word)) return true;
    }
  }
  return false;

  function search(x, y, str) {
    if (board[x][y] !== str[0]) return false;
    if (str.length === 1) return true;
    visit[x][y] = true;
    for (const [i, j] of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
      if (
        i >= 0 && i < m && j >= 0 && j < n &&
        !visit[i][j] &&
        search(i, j, str.slice(1))
      ) return true;
    }
    visit[x][y] = false;
    return false;
  }
};