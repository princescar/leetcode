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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const result = [];
  t(root);
  return result;

  function t(node) {
    if (node == null) return;
    if (node.left) t(node.left);
    if (node.right) t(node.right);
    result.push(node.val);
  }
};