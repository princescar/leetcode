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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  if (root == null) return [];
  const result = [];
  p([root], targetSum - root.val);
  return result;
  function p(chain, remain) {
    const node = chain[chain.length - 1];
    if (!node.left && !node.right && remain === 0) {
      result.push(chain.map(x => x.val));
    }
    if (node.left) {
      p([...chain, node.left], remain - node.left.val);
    }
    if (node.right) {
      p([...chain, node.right], remain - node.right.val);
    }
  }
};