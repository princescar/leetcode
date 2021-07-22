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
var isSymmetric = function(root) {
  const stack1 = [root.left], stack2 = [root.right];

  while (stack1.length > 0 || stack2.length > 0) {
    const node1 = stack1.pop();
    const node2 = stack2.pop();

    if (node1 == null && node2 == null) continue;
    if (node1 == null || node2 == null) return false;
    if (node1.val !== node2.val) return false;

    stack1.push(node1.left);
    stack2.push(node2.right);

    stack1.push(node1.right);
    stack2.push(node2.left);
  }
  return true;
};