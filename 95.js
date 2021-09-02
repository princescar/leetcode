/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  return generate(1, n);
  function generate(low, high) {
    if (low > high) return [null];
    const result = [];
    for (let x = low; x <= high; x++) {
      const lefts = generate(low, x - 1);
      const rights = generate(x + 1, high);
      for (const left of lefts) {
        for (const right of rights) {
          result.push(new TreeNode(x, left, right));
        }
      }
    }
    return result;
  }
};