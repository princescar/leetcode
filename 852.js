/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid + 1] < arr[mid]) {
      if (arr[mid - 1] < arr[mid]) return mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};