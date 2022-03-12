/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  if (!root) return [];
  const ans = [];
  root.children.forEach(child => ans.push(...postorder(child)));
  ans.push(root.val);
  return ans;
};