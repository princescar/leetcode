/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = 0, i2 = 0;
  while (i < m + n) {
    if (i2 > n - 1) break;
    const i1 = i - i2;
    if (i1 > m - 1 || nums1[i] > nums2[i2]) {
      let next = nums1[i];
      for (let k = i + 1; k < m + n; k++) {
        const current = nums1[k];
        nums1[k] = next;
        next = current;
      }
      nums1[i++] = nums2[i2++];
    } else {
      i++;
    }
  }
};