/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let c1 = count(headA), c2 = count(headB);
  let long = headA, short = headB;
  if (c1 < c2) {
    long = headB;
    short = headA;
  }

  for (let i = 0; i < Math.abs(c1 - c2); i++) {
    long = long.next;
  }

  while(long && short) {
    if (long === short) return long;
    long = long.next;
    short = short.next;
  }

  function count(head) {
    let node = head, c = 0;
    while(node) {
      node = node.next;
      c++;
    }
    return c;
  }
};