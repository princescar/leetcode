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
var isEvenOddTree = function(root) {
  let level = 0;
  let nodes = [root];
  while (nodes.length > 0) {
    let next = [], prev = level % 2 === 0 ? -Infinity : Infinity;
    for (const node of nodes) {
      if (
        level % 2 === 0 && (node.val % 2 === 0 || node.val <= prev) ||
        level % 2 === 1 && (node.val % 2 === 1 || node.val >= prev)
      ) return false;
      prev = node.val;
      node.left && next.push(node.left);
      node.right && next.push(node.right);
    }
    nodes = next;
    level++;
  }
  return true;
};