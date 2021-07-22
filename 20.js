/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const invalid = Array.prototype.find.call(s, c1 => {
    if (c1 === '(' || c1 === '{' || c1 === '[') {
      stack.push(c1);
    } else {
      const c2 = stack.pop();
      return (c1 === ')' && c2 !== '(') ||
        (c1 === '}' && c2 !== '{') ||
        (c1 === ']' && c2 !== '[')
    }
  });
  return !invalid && stack.length === 0;
};