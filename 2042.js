/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
  const arr = s.split(' ');
  for (let i = 0, prev = 0; i < arr.length; i++) {
    const curr = parseInt(arr[i]);
    if (!isNaN(curr)) {
      if (curr <= prev) return false;
      prev = curr;
    }
  }
  return true;
};