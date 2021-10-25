/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const n = rooms.length, keys = [], visited = [];
  keys[0] = true;
  let count = 0;
  while (count < n) {
    let newKey = false;
    for (let i = 0; i < n; i++) {
      if (keys[i] && !visited[i]) {
        visited[i] = true;
        ++count;
        for (let j of rooms[i]) {
          keys[j] = true;
          newKey = true;
        }
      }
    }
    if (!newKey) break;
  }
  return count === n;
};