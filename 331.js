/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  const arr = preorder.split(',');
  return arr.length % 2 &&
    (arr.length === 1 && arr[0] === '#' ||
      arr[arr.length - 1] === '#' &&
      arr[arr.length - 2] === '#') &&
    traverse(0) === arr.length;

  function traverse(start) {
    if (start >= arr.length) return start + 1;
    if (arr[start] === '#') return start + 1;
    else return traverse(traverse(start + 1));
  }
};