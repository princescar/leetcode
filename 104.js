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
var maxDepth = function(root) {
  if (!root) return 0;

  let d = 1;
  let queue = [root];
  while (queue.length > 0) {
    queue = queue.reduce((s, x) => {
      if (x.left) s.push(x.left);
      if (x.right) s.push(x.right);
      return s;
    }, []);
    d++;
  }
  return d - 1;
};