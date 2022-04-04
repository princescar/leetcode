/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.sums = [];
  let sum = 0;
  for (const x of nums) {
    this.sums.push(sum);
    sum += x;
  }
  this.sums.push(sum);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
  const diff = val - this.nums[index];
  this.nums[index] = val;
  for (let i = index + 1; i < this.sums.length; i++)
    this.sums[i] += diff;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.sums[right + 1] - this.sums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
