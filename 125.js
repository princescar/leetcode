/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const ss = s.toLowerCase();
  let i = 0; j = ss.length - 1;
  while (i <= j) {
    const c1 = ss.charCodeAt(i);
    const c2 = ss.charCodeAt(j);
    if (!valid(c1)) {
      i++;
    } else if (!valid(c2)) {
      j--;
    } else if (c1 !== c2) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;

  function valid(c) {
    return c >= 97 && c <= 122 || c >= 48 && c <= 57;
  }
};