/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  const dummy = new ListNode(undefined, head);
  let fast = slow = dummy;
  while (true) {
    if (!fast || !fast.next) return null;
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) break;
  }
  let node = dummy;
  while (node !== slow) {
    slow = slow.next;
    node = node.next;
  }
  return node;
};