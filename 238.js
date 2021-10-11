/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const ans = new Array(nums.length).fill(0);
  let zeroIndex = -1, product = 1;
  const pLeft = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (zeroIndex >= 0) return ans;
      else zeroIndex = i;
    } else {
      product *= nums[i];
      pLeft[i] = product;
    }
  }
  if (zeroIndex >= 0) {
    ans[zeroIndex] = product;
    return ans;
  }
  product = 1;
  const pRight = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    product *= nums[i];
    pRight[i] = product;
  }
  for (let i = 0; i < nums.length; i++) {
    const left = i > 0 ? pLeft[i - 1] : 1;
    const right = i < nums.length - 1 ? pRight[i + 1] : 1;
    ans[i] = left * right;
  }
  return ans;
};