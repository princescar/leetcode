var SummaryRanges = function() {
  this.flag = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
  this.flag[val] = true;
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
  const ans = [];
  let start = -1;
  for (let i = 0; i < 10000; i++) {
    if (start < 0 && this.flag[i]) {
      start = i;
    } else if (start >= 0 && !this.flag[i]) {
      ans.push([start, i - 1]);
      start = -1;
    }
  }
  return ans;
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */