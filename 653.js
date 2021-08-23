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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const qs = [root];
  let l = root.left, r = root.right;
  traverseLeft(l);
  traverseRight(r);
  
  while (true) {
    l = qs.shift();
    r = qs.pop();
    if (!l || !r || l === r) return false;
    const x = l.val + r.val;
    if (x === k) return true;
    if (x > k) {
      qs.unshift(l);
      if (r.left) traverseRight(r.left);
    } else {
      qs.push(r);
      if (l.right) traverseLeft(l.right);
    }
  }

  function traverseLeft(l) {
    while (l) {
      qs.unshift(l);
      l = l.left;
    }
  }

  function traverseRight(r) {
    while (r) {
      qs.push(r);
      r = r.right;
    }
  }
};