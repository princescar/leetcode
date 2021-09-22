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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
  let node = head, n = 0;
  while (node) {
    node = node.next;
    n++;
  }
  const avg = Math.floor(n / k);
  const extra = n % k;

  const ans = [head];
  let curr = head, prev = null, count = 0;
  while (ans.length < k) {
    prev = curr;
    curr = curr ? curr.next : null;
    count++;
    const required = ans.length <= extra ? avg + 1 : avg;
    if (count >= required) {
      if (prev) prev.next = null;
      ans.push(curr);
      count = 0;
    }
  }

  return ans;
};