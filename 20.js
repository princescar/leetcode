/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (const ch of s) {
    const pair = map[ch];
    if (pair) {
      if (stack.pop() !== pair) return false;
    } else {
      stack.push(ch);
    }
  }
  return true;
};