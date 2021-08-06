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
  let nodes = [root];
  while (nodes.length > 0) {
    result.push(nodes.map(x => x.val));
    nodes = nodes.reduce((a, x) => [...a, ...x.children], []);
  }
  return result;
};