/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let ans = null;
  traverse(root);
  return ans;

  function traverse(node) {
    if (!node) return 0;
    let count = node === p || node === q ? 1 : 0;
    count += traverse(node.left) + traverse(node.right);
    if (count === 2 && !ans) ans = node;
    return count;
  }
};