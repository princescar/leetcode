/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const ans = [];
  const s1 = root1 ? [root1] : [], s2 = root2 ? [root2] : [];
  while (s1.length && s2.length) {
    const n1 = s1[s1.length - 1];
    const n2 = s2[s2.length - 1];
    if (n1.left && !n1.markLeft) {
      n1.markLeft = true;
      s1.push(n1.left);
    } else if (n2.left && !n2.markLeft) {
      n2.markLeft = true;
      s2.push(n2.left);
    } else if (n1.val > n2.val) {
      s2.pop();
      ans.push(n2.val);
      if (n2.right) s2.push(n2.right);
    } else {
      s1.pop();
      ans.push(n1.val);
      if (n1.right) s1.push(n1.right);
    }
  }
  const s = s1.length ? s1 : s2;
  while (s.length) {
    const n = s[s.length - 1];
    if (n.left && !n.markLeft) {
      s.push(n.left);
      n.markLeft = true;
    } else {
      s.pop();
      ans.push(n.val);
      if (n.right) s.push(n.right);
    }
  }
  return ans;
};
