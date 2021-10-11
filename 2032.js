/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
  const map = new Array(101).fill(0);
  for (const x of nums1) map[x] |= 1;
  for (const x of nums2) map[x] |= 2;
  for (const x of nums3) map[x] |= 4;
  const ans = [];
  for (let x = 1; x <= 100; x++) {
    if (map[x] === 3 || map[x] === 5 || map[x] === 6 || map[x] === 7) {
      ans.push(x);
    }
  }
  return ans;
};