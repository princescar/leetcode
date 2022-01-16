/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
  let count = 0, node = head;
  while (node) {
    count++;
    node = node.next;
  }
  this.count = count;
  this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let i = Math.floor(Math.random() * this.count), node = this.head;
  while (i--) node = node.next;
  return node.val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */