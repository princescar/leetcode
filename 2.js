/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0, n1 = l1, n2 = l2, prev = head = null;
  while (n1 || n2) {
    const d1 = n1 ? n1.val : 0;
    const d2 = n2 ? n2.val : 0;
    const x = d1 + d2 + carry;
    const node = new ListNode(x % 10);
    if (prev) prev.next = node;
    else head = node;
    prev = node;
    carry = Math.floor(x / 10);
    if (n1) n1 = n1.next;
    if (n2) n2 = n2.next;
  }
  if (carry) prev.next = new ListNode(carry);
  return head;
};