/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  const dummy = new ListNode(0, head);
  let i = 1, prev = dummy, node = head;
  while (i < left) {
    prev = node;
    node = node.next;
    i++;
  }
  const before = prev, end = node;
  while (i <= right) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
    i++;
  }
  const after = node, start = prev;
  before.next = start;
  end.next = after;
  return dummy.next;
};