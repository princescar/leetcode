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
 * @return {boolean}
 */
var isValidBST = function(root) {
  return visit(root, -Infinity, Infinity);
  function visit(node, low, high) {
    if (!node) return true;
    if (node.val <= low || node.val >= high) return false;
    return visit(node.left, low, node.val) &&
      visit(node.right, node.val, high);
  }
};