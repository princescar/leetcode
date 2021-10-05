/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let l = i + 1; r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] < -nums[i]) {
        l++;
      } else if (nums[l] + nums[r] > -nums[i]) {
        r--;
      } else {
        ans.push([nums[i], nums[l++], nums[r--]]);
        while (nums[l - 1] === nums[l] && l < r) l++;
        while (nums[r + 1] === nums[r] && l < r) r--;
      };
    }
  }
  return ans;
};