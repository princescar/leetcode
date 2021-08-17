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
var goodNodes = function(root) {
  let counter = 0;
  good(-Infinity, root);
  return counter;

  function good(max, node) {
    if (!node) return;
    if (node.val >= max) {
      counter++;
      max = node.val;
    }
    good(max, node.left);
    good(max, node.right);
  }
};