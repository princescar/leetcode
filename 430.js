/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  f(head);
  return head;

  function f(head) {
    let node = head, prev = null;
    while (node) {
      const next = node.next;
      if (node.child) {
        const tail = f(node.child);
        node.next = node.child;
        node.child.prev = node;
        node.child = null;
        if (next) {
          tail.next = next;
          next.prev = tail;
        }
        prev = tail;
      } else {
        prev = node;
      }
      node = next;
    }
    return prev;
  }
};