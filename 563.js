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
var findTilt = function(root) {
  const [, ans] = dfs(root);
  return ans;

  function dfs(root) {
    if (!root) return [0, 0];
    const [sumLeft, tiltLeft] = dfs(root.left);
    const [sumRight, tiltRight] = dfs(root.right);
    const sum = sumLeft + sumRight + root.val;
    const tilt = Math.abs(sumLeft - sumRight);
    return [sum, tilt + tiltLeft + tiltRight];
  }
};