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
  let lenA = 0, lenB = 0;
  for (let node = headA; node; node = node.next) lenA++;
  for (let node = headB; node; node = node.next) lenB++;
  let nodeA = headA, nodeB = headB;
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) nodeA = nodeA.next;
  } else {
    for (let i = 0; i < lenB - lenA; i++) nodeB = nodeB.next;
  }
  while (nodeA !== nodeB) {
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  return nodeA;
};