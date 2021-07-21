/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if (n === 0) return;

  for (let i = 0; i < m; i++) {
    const a = nums1[i];
    if (a > nums2[0]) {
      nums1[i] = nums2[0];
      nums2[0] = a;
      for (let j = 1; j < n; j++) {
        if (nums2[j - 1] > nums2[j]) {
          const b = nums2[j];
          nums2[j] = nums2[j - 1];
          nums2[j - 1] = b;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
};