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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
  const startPath = find(root, startValue);
  const destPath = find(root, destValue);
  let i = 0;
  while (
    i < Math.min(startPath.length, destPath.length) &&
    startPath[i] === destPath[i]
  ) i++;
  return 'U'.repeat(startPath.length - i) + destPath.substring(i);

  function find(root, val) {
    if (!root) return null;
    if (root.val === val) return '';
    const leftPath = find(root.left, val);
    if (leftPath != null) return 'L' + leftPath;
    const rightPath = find(root.right, val);
    if (rightPath != null) return 'R' + rightPath;
    return null;
  }
};