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
  let node = head, prev = null;
  while (node) {
    if (prev && node.val === prev.val) prev.next = node.next;
    else prev = node;
    node = node.next;
  }
  return head;
};