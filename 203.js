/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const dummy = new ListNode(0, head);
  let node = head, prev = dummy;
  while (node) {
    if (node.val === val) prev.next = node.next;
    else prev = node;
    node = node.next;
  }
  return dummy.next;
};