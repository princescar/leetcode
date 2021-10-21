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
var rightSideView = function(root) {
  if (!root) return [];
  const ans = [];
  const nodes = [root];
  while (nodes.length) {
    ans.push(nodes[nodes.length - 1].val);
    const len = nodes.length;
    for (let i = 0; i < len; i++) {
      if (nodes[i].left) nodes.push(nodes[i].left);
      if (nodes[i].right) nodes.push(nodes[i].right);
    }
    nodes.splice(0, len);
  }
  return ans;
};