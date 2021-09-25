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
var mergeTwoLists = function(l1, l2) {
  const dummy = new ListNode();
  let n1 = l1, n2 = l2, prev = dummy;
  while (n1 || n2) {
    if (!n2 || n1 && n1.val <= n2.val) {
      prev.next = n1;
      prev = n1;
      n1 = n1.next;
    } else {
      prev.next = n2;
      prev = n2;
      n2 = n2.next;
    }
  }
  return dummy.next;
};