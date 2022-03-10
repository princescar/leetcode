/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (!root) return [];
  const ans = [root.val];
  root.children.forEach(child => ans.push(...preorder(child)));
  return ans;
};