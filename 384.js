/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const arr = [...this.nums];
  const ans = [];
  while (arr.length > 0) {
    const i = Math.floor(Math.random() * arr.length);
    ans.push(arr.splice(i, 1));
  }
  return ans;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */