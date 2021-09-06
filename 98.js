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
  let prev = -Infinity;
  return inOrderTraverse(root);
  function inOrderTraverse(node) {
    if (node == null) return true;
    if (!inOrderTraverse(node.left)) return false;
    if (prev >= node.val) return false;
    prev = node.val;
    return inOrderTraverse(node.right);
  }
};