/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const ans = [];
  for (const x of nums1) {
    const index = nums2.indexOf(x);
    let bigger = -1;
    for (let i = index + 1; i < nums2.length; i++) {
      if (nums2[i] > x) {
        bigger = nums2[i];
        break;
      }
    }
    ans.push(bigger);
  }
  return ans;
};