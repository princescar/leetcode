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
var deleteDuplicates = function(head) {
  const dummy = new ListNode(0, head);
  let prev = dummy, cur = head, del;
  while (cur) {
    if (cur.next && cur.next.val === cur.val) del = cur.val;
    if (del === cur.val) prev.next = cur.next;
    else prev = cur;
    cur = cur.next;
  }
  return dummy.next;
};