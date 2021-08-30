/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.probability = [];
  this.sum = 0;
  for (let i = 0; i < w.length; i++) {
    this.sum += w[i];
    this.probability[i] = this.sum;
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  const upper = Math.floor(Math.random() * this.sum) + 1;
  let l = 0; r = this.probability.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (this.probability[mid] === upper) return mid;
    else if (this.probability[mid] > upper) r = mid - 1;
    else l = mid + 1;
  }
  return l;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */