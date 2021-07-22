/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return tree(0, nums.length - 1);
  function tree(start, end) {
    if (start > end) return null;
    const mid = start + Math.floor((end - start) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = tree(start, mid - 1);
    root.right = tree(mid + 1, end);
    return root;
  }
};