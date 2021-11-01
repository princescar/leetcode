/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
  const criticals = [];
  let i = 0, ascend = false, descend = false;
  let node = head.next, prev = head;
  while (node) {
    if (prev.val < node.val) {
      if (descend) criticals.push(i);
      ascend = true;
      descend = false;
    } else if (prev.val > node.val) {
      if (ascend) criticals.push(i);
      ascend = false;
      descend = true;
    } else {
      ascend = descend = false;
    }
    prev = node;
    node = node.next;
    i++;
  }
  if (criticals.length < 2) return [-1, -1];
  let min = Infinity;
  for (let i = 1; i < criticals.length; i++) {
    min = Math.min(min, criticals[i] - criticals[i - 1]);
  }
  const max = criticals[criticals.length - 1] - criticals[0];
  return [min, max];
};