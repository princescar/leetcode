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
var isBalanced = function(root) {
  return height(root) !== false;

  function height(root) {
    if (!root) return 0;
    const lh = height(root.left);
    if (lh === false) return false;
    const rh = height(root.right);
    if (rh === false) return false;
    if (Math.abs(lh - rh) > 1) return false;
    return Math.max(lh, rh) + 1;
  }
};