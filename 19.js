/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const l = reverse(head);
  const l2 = remove(l, n);
  return reverse(l2);

  function reverse(list) {
    let node = list;
    let previous = null;
    while(node) {
      const current = node;
      node = node.next;
      current.next = previous;
      previous = current;
    }
    return previous;
  }

  function remove(list, n) {
    let counter = 1;
    let node = list;
    let previous = null;
    while (counter !== n) {
      previous = node;
      node = node.next;
      counter++;
    }
    if (previous) {
      previous.next = node.next;
      return list;
    } else {
      return node.next;
    }
  }
};