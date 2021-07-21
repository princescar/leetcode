/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const dummy = new ListNode();
  const nodes = [...lists];
  let p = dummy, pi = -1;
  while(true) {
    let m = p.next, mi = pi;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i] && (!m || nodes[i].val < m.val)) {
        m = nodes[i];
        mi = i;
      }
    }

    if (!m) break;

    if (mi !== pi) {
      p.next = m;
      pi = mi;
    }
    p = m;
    nodes[mi] = m.next;
  }
  return dummy.next;
};