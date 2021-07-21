/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let p = dummy = new ListNode(0, head);
  let n = head;
  while(true) {
    const kn = [];
    for (let i = 0; i < k;i++) {
      if (!n) break;
      kn.push(n);
      n = n.next;
    }
    if (kn.length < k) break;
    let t = kn[k - 1].next;
    let np = p;
    while (kn.length > 0) {
      const c = kn.pop();
      np.next = c;
      np = c;
    }
    np.next = t;
    p = np;
  }
  return dummy.next;
};