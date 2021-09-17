/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  const m = board.length, n = board[0].length;
  const map = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const x = i * n + j;
      if (map.has(board[i][j])) map.get(board[i][j]).push(x);
      else map.set(board[i][j], [x]);
    }
  }
  return words.filter(w => find(w));

  function find(word, visited = [], last = -1) {
    if (word.length === 0) return true;
    let arr = map.get(word[0]);
    if (!arr) return false;
    arr = arr.filter(x => !visited[x] && isNeighbor(last, x));
    if (arr.length === 0) return false;
    for (const pos of arr) {
      visited[pos] = true;
      if (find(word.slice(1), visited, pos)) return true;
      visited[pos] = false;
    }
    return false;
  }

  function isNeighbor(prev, curr) {
    if (prev < 0) return true;
    const diff = curr - prev;
    return diff === n || diff === -n ||
      diff === 1 && curr % n !== 0 ||
      diff === -1 && prev % n !== 0
  }
};