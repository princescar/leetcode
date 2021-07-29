/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let fast = head, slow = head;
  while(fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let prev = null, node = slow;
  while(node != null) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  let node1 = head, node2 = prev;
  while(node2 != null) {
    if(node1.val !== node2.val) return false;
    node1 = node1.next;
    node2 = node2.next;
  }
  
  return true;
};