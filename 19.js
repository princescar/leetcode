/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0, head);
  let first = dummy, second = dummy;
  let gap = 0;
  while (first) {
    first = first.next;
    if (gap === n + 1) {
      second = second.next;
    } else {
      gap++;
    }
  }
  second.next = second.next.next;
  return dummy.next;
};