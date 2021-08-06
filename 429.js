/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return [];
  const result = [];
  dfs(root, 0);
  function dfs(node, level) {
    if (!result[level]) result[level] = [];
    result[level].push(node.val);
    node.children.forEach(x => dfs(x, level + 1));
  }
  return result;
};