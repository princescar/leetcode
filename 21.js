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
  const first = new ListNode();
  let current = first;
  let n1 = l1, n2 = l2;
  while(n1 || n2) {
    if (!n1) {
      current.next = n2;
      n2 = n2.next;
    } else if (!n2) {
      current.next = n1;
      n1 = n1.next;
    } else if (n1.val > n2.val) {
      current.next = n2;
      n2 = n2.next;
    } else {
      current.next = n1;
      n1 = n1.next;
    }
    current = current.next;
  }
  return first.next;
};