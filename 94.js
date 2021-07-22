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
  if (!root) return [];

  const result = [];

  const stack = [root];
  while(stack.length > 0) {
    const node = stack.pop();
    node.v = true;
    if (node.left && !node.left.v) {
      stack.push(node);
      stack.push(node.left);
    } else {
      result.push(node.val);
      if (node.right) stack.push(node.right);
    }
  }

  return result;
};