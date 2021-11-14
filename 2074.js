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
var reverseEvenLengthGroups = function(head) {
  let node = head, n = 1, stack = [];
  while (node) {
    let x = n, start = node;
    while (node && x--) {
      stack.push(node.val);
      node = node.next;
    }
    if (stack.length % 2 === 0) {
      while (stack.length) {
        start.val = stack.pop();
        start = start.next;
      }
    } else {
      stack = [];
    }
    n++;
  }
  return head;
};