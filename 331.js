/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  const arr = preorder.split(',');
  if (arr.length % 2 === 0) return false;
  let slots = 1;
  for (const x of arr) {
    if (slots === 0) return false;
    if (x === '#') slots--;
    else slots++;
  }
  return slots === 0;
};