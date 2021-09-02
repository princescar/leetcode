/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const dummy = new ListNode(0, head);
  let fast = slow = dummy;
  while (fast.next && fast.next.val < x) {
    fast = fast.next;
  }
  while (fast.next) {
    if (fast.next.val >= x) {
      fast = fast.next;
    } else if (slow.next.val < x) {
      slow = slow.next;
    } else {
      const small = fast.next;
      fast.next = small.next;
      small.next = slow.next;
      slow.next = small;
    }
  }
  return dummy.next;
};