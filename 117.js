/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root) bfs(root);
  return root;

  function bfs(node) {
    let child = null, first = null;
    while (node) {
      if (node.left) {
        if (child) child.next = node.left;
        else first = node.left;
        child = node.left;
      }
      if (node.right) {
        if (child) child.next = node.right;
        else first = node.right;
        child = node.right;
      }
      node = node.next;
    }
    if (first) bfs(first);
  }
};