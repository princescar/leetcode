/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  if (root.children.length === 0) return 1;
  return 1 + Math.max(...root.children.map(maxDepth));
};