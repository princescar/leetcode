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
var inorderTraversal = function(root) {
  const result = [];
  visit(root);
  return result;

  function visit(node) {
    if (!node) return;
    if (node.left) visit(node.left);
    result.push(node.val);
    if (node.right) visit(node.right);
  }
};