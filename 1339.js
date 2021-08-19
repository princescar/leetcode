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
var maxProduct = function(root) {
  const arr = [];
  sum(root);
  const total = arr[arr.length - 1];
  let minDiff = Infinity, x = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = Math.abs(total - (arr[i] << 1));
    if (diff < minDiff) {
      minDiff = diff;
      x = arr[i];
    }
  }
  return x * (total - x) % 1000000007;

  function sum(node) {
    if (node == null) return 0;
    const r = node.val + sum(node.left) + sum(node.right);
    arr.push(r);
    return r;
  }
};