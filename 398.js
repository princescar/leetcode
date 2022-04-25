/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (this.map.has(x)) this.map.get(x).push(i);
    else this.map.set(x, [i]);
  }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  const arr = this.map.get(target);
  const rnd = Math.floor(Math.random() * arr.length);
  return arr[rnd];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
