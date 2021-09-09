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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const ans = [];
  let level = 0;
  const queue = [root];
  while (queue.length > 0) {
    console.log(queue.map(x => x.val));
    const len = queue.length;
    ans[level] = [];
    for (let i = 0; i < len; i++) {
      ans[level].push(queue[i].val);
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
    level++;
    queue.splice(0, len);
  }
  return ans;
};