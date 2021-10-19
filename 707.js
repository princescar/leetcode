
var MyLinkedList = function() {
  this.dummy = new ListNode();
  this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index >= this.size) return -1;
  let node = this.dummy;
  for (let i = 0; i <= index; i++) node = node.next;
  return node.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.dummy.next = new ListNode(val, this.dummy.next);
  ++this.size;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let node = this.dummy;
  while (node.next) node = node.next;
  node.next = new ListNode(val);
  ++this.size;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size) return;
  let node = this.dummy;
  for (let i = 0; i < index; i++) node = node.next;
  node.next = new ListNode(val, node.next);
  ++this.size;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.size) return;
  let node = this.dummy;
  for (let i = 0; i < index; i++) node = node.next;
  node.next = node.next.next;
  --this.size;
};

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */