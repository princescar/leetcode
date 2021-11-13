var RangeModule = function () {
  this.head = new RangeNode();
};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function (left, right) {
  let node = this.head.next, prev = this.head;
  while (node && node.left <= left) {
    prev = node;
    node = node.next;
  }
  if (prev.right >= left) {
    prev.right = Math.max(prev.right, right);
  } else {
    prev.next = new RangeNode(left, right, node);
    prev = prev.next;
  }
  while (prev.next && prev.right >= prev.next.left) {
    prev.right = Math.max(prev.right, prev.next.right);
    prev.next = prev.next.next;
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function (left, right) {
  for (let node = this.head.next; node; node = node.next) {
    if (node.left <= left && node.right >= right) return true;
  }
  return false;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function (left, right) {
  let node = this.head.next, prev = this.head;
  while (node) {
    if (node.right <= left) {
      prev = node;
      node = node.next;
    } else if (node.left < right) {
      if (node.left >= left && node.right <= right) {
        prev.next = node.next;
        node = prev.next;
      } else if (node.left >= left && node.right > right) {
        node.left = right;
        break;
      } else if (node.left < left && node.right > right) {
        node.next = new RangeNode(right, node.right, node.next);
        node.right = left;
        break;
      } else if (node.left < left && node.right <= right) {
        node.right = left;
        prev = node;
        node = node.next;
      }
    } else if (node.left >= right) {
      break;
    }
  }
};

class RangeNode {
  constructor(left, right, next = null) {
    this.left = left;
    this.right = right;
    this.next = next;
  }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */
