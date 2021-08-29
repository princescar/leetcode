/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let len = 1, sum = 0;
  while (len <= arr.length) {
    for (let i = 0; i < arr.length - len + 1; i++) {
      for (let j = 0; j < len; j++) {
        sum += arr[i + j];
      }
    }
    len += 2;
  }
  return sum;
};