/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let start = head, end = head, newHead = null, prevSegment = null;
  while (end) {
    for (let i = 0; i < k; i++) {
      if (!end) {
        prevSegment.next = start;
        return newHead || head;
      }
      end = end.next;
    }
    let prev = null, curr = start;
    while (curr !== end) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    if (!prevSegment) newHead = prev;
    else prevSegment.next = prev;
    prevSegment = start;
    start = end;
  }
  return newHead || head;
};