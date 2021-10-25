/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return '|';
  const parents = [], values = [];
  traverse(0, -1, root);
  const ans = parents.join() + '|' + values.join();
  return ans;

  function traverse(i, parent, node) {
    parents[i] = parent;
    values[i] = node ? node.val : null;
    let j = i + 1;
    if (node) {
      j = traverse(j, i, node.left);
      j = traverse(j, i, node.right);
    }
    return j;
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const [p, v] = data.split('|');
  if (!p) return null;
  const parents = p.split(',').map(x => parseInt(x));
  const values = v.split(',').map(x => x === '' ? null : parseInt(x));
  const root = new TreeNode(values[0]);
  build(0, root);
  return root;

  function build(i, node) {
    const left = parents.indexOf(i);
    if (left >= 0) {
      node.left = values[left] === null ? null : new TreeNode(values[left]);
      if (node.left) build(left, node.left);
    }
    const right = parents.indexOf(i, left + 1);
    if (right >= 0) {
      node.right = values[right] === null ? null : new TreeNode(values[right]);
      if (node.right) build(right, node.right);
    }
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */