/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
  if (Math.abs(first.length - second.length) > 1) return false;
  let modified = false;
  for (let i = 0, j = 0; i < first.length && j < second.length; i++, j++) {
    if (first[i] === second[j]) continue;
    if (modified) return false;
    modified = true;
    if (first.length === second.length) continue;
    else if (first.length < second.length) i--;
    else j--;
  }
  return true;
};
