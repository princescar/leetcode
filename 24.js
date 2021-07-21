/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let p = dummy = new ListNode(0, head);
  let n = head;
  while(n && n.next) {
    p.next = n.next;
    const t = n.next.next;
    n.next.next = n;
    n.next = t;
    p = n;
    n = n.next;
  }
  return dummy.next;
};