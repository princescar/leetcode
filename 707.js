
var MyLinkedList = function() {
  this.head = new ListNode();
  this.tail = new ListNode();
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index >= this.size) return -1;
  if (index < this.size / 2) {
    let node = this.head;
    for (let i = 0; i <= index; i++) node = node.next;
    return node.val;
  } else {
    let node = this.tail;
    for (let i = 0; i < this.size - index; i++) node = node.prev;
    return node.val;
  }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new ListNode(val, this.head, this.head.next);
  this.head.next.prev = node;
  this.head.next = node;
  ++this.size;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new ListNode(val, this.tail.prev, this.tail);
  this.tail.prev.next = node;
  this.tail.prev = node;
  ++this.size;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size) return;
  if (index < this.size / 2) {
    let prev = this.head;
    for (let i = 0; i < index; i++) prev = prev.next;
    const node = new ListNode(val, prev, prev.next);
    prev.next.prev = node;
    prev.next = node;
  } else {
    let next = this.tail;
    for (let i = 0; i < this.size - index; i++) next = next.prev;
    const node = new ListNode(val, next.prev, next);
    next.prev.next = node;
    next.prev = node;
  }
  ++this.size;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.size) return;
  if (index < this.size / 2) {
    let prev = this.head;
    for (let i = 0; i < index; i++) prev = prev.next;
    prev.next = prev.next.next;
    prev.next.prev = prev;
  } else {
    let next = this.tail;
    for (let i = 0; i < this.size - index - 1; i++) next = next.prev;
    next.prev = next.prev.prev;
    next.prev.next = next;
  }
  --this.size;
};

function ListNode(val, prev, next) {
  this.val = val;
  this.prev = prev;
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