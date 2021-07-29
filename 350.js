/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const n1 = [], n2 = [];
  for(let i = 0; i < nums1.length; i++) {
    n1[nums1[i]] = (n1[nums1[i]] || 0) + 1;
  }
  for(let i = 0; i < nums2.length; i++) {
    n2[nums2[i]] = (n2[nums2[i]] || 0) + 1;
  }
  const r = [];
  for(let i = 0; i <= 1000; i++) {
    let c = Math.min((n1[i] || 0), (n2[i] || 0));
    while(c-- > 0) r.push(i);
  }
  return r;
};