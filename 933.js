var RecentCounter = function() {
  this.arr = [];
  this.i = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.arr.push(t);
  while (this.i < this.arr.length && t - this.arr[this.i] > 3000) this.i++;
  return this.arr.length - this.i;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
