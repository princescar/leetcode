/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) map.get(arr[i]).push(i);
    else map.set(arr[i], [i]);
  }
  this.map = map;
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {
  const arr = this.map.get(value);
  if (!arr) return 0;
  const [,i] = binarySearch(arr, left);
  const [j,] = binarySearch(arr, right);
  return j - i + 1;
};

function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] > target) r = mid - 1;
    else if (arr[mid] < target) l = mid + 1;
    else return [mid, mid];
  }
  return [r, l];
}

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */