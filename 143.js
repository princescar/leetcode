/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  const stack = [];
  for (let n = head; n; n = n.next) stack.push(n);
  const len = stack.length;
  let node = head;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    const next = node.next;
    node.next = stack.pop();
    if (node.next === next) node.next.next = null;
    else node.next.next = next;
    node = next;
  }
  if (len % 2) node.next = null;
  return head;
};