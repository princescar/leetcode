/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const result = [];
  go([0]);
  return result;

  function go(arr) {
    const last = arr[arr.length - 1];
    if (last === graph.length - 1) {
      result.push(arr);
      return;
    }
    for (const to of graph[last]) {
      go([...arr, to]);
    }
  }
};