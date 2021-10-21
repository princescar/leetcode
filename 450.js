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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) {
    return null;
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  } else if (!root.right) {
    return root.left;
  } else if (!root.right.left) {
    root.right.left = root.left;
    return root.right;
  } else {
    let min = root.right.left, parent = root.right;
    while (min.left) {
      parent = min;
      min = min.left;
    }
    parent.left = min.right;
    min.right = null;
    min.left = root.left;
    min.right = root.right;
    return min;
  }
};