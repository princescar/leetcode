/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  return root ? depth(root) : 0;

  function depth(root) {
    if (!root) return Infinity;
    if (!root.left && !root.right) return 1;
    return Math.min(depth(root.left), depth(root.right)) + 1;
  }
};