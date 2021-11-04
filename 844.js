/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  const stack1 = go(s), stack2 = go(t);
  if (stack1.length !== stack2.length) return false;
  while (stack1.length > 0) {
    const c1 = stack1.pop();
    const c2 = stack2.pop();
    if (c1 !== c2) return false;
  }
  return true;
  
  function go(str) {
    const stack = [];
    for (const c of str) {
      if (c === '#') stack.pop();
      else stack.push(c);
    }
    return stack;
  }
};