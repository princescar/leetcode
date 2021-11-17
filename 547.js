/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const province = [], n = isConnected.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (province[i] == null) {
      ans++;
      dfs(i);
    }
  }
  return ans;

  function dfs(i) {
    if (province[i] != null) return;
    province[i] = ans;
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j]) dfs(j);
    }
  }
};