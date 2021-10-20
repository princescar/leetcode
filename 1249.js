/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let stack = [], remove = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      remove[i] = true;
      stack.push(i);
    } else if (s[i] === ')') {
      if (stack.length > 0) {
        const j = stack.pop();
        remove[j] = false;
      } else {
        remove[i] = true;
      }
    }
  }
  const arr = [];
  for (let i = 0; i < s.length; i++)
    if (!remove[i]) arr.push(s[i]);
  return arr.join('');
};